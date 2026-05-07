const https = require('https');

function makeRequest(hostname, path, options, bodyData) {
  return new Promise((resolve, reject) => {
    const reqOptions = { ...options, hostname, path };
    const req = https.request(reqOptions, (res) => {
      // Follow redirects
      if ((res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 307) && res.headers.location) {
        const loc = res.headers.location;
        const newUrl = new URL(loc.startsWith('http') ? loc : `https://${hostname}${loc}`);
        return makeRequest(newUrl.hostname, newUrl.pathname + newUrl.search, options, bodyData)
          .then(resolve).catch(reject);
      }
      let raw = '';
      res.on('data', chunk => { raw += chunk; });
      res.on('end', () => resolve({ status: res.statusCode, raw }));
    });
    req.on('error', reject);
    req.write(bodyData);
    req.end();
  });
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { transId, email, amount, title, redirectUrl } = req.body;

  const USERNAME    = 'databloom69f38d7a90a04';
  const API_KEY     = 'NDQ0YjQxYTEwOGJkYmQwNmVjN2JiNDdlMzkxY2ViNzM=';
  const MERCHANT_ID = 'TTM-00011701';

  const credentials = Buffer.from(`${USERNAME}:${API_KEY}`).toString('base64');
  const amountPesewas = String(Math.round(parseFloat(amount) * 100));

  const bodyData = JSON.stringify({
    merchant_id: MERCHANT_ID,
    transaction_id: transId,
    desc: `Registration - ${title}`,
    amount: amountPesewas,
    redirect_url: redirectUrl,
    email,
    currency: 'GHS',
  });

  const reqOptions = {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${credentials}`,
      'Merchant-Id': MERCHANT_ID,
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'Content-Length': Buffer.byteLength(bodyData),
    },
  };

  try {
    const { status, raw } = await makeRequest(
      'test.theteller.net',
      '/checkout/initiate',
      reqOptions,
      bodyData
    );
    let data;
    try { data = JSON.parse(raw); } catch { data = { raw }; }
    return res.status(200).json({ httpStatus: status, ...data });
  } catch (err) {
    return res.status(200).json({ error: 'fetch_failed', details: err.message });
  }
};
