const https = require('https');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { transId, email, amount, title, redirectUrl } = req.body;

  const API_USER    = 'databloom69f38d7a90a04';
  // Use API key exactly as shown in the dashboard (do not decode)
  const API_KEY     = 'NDQ0YjQxYTEwOGJkYmQwNmVjN2JiNDdlMzkxY2ViNzM=';
  const MERCHANT_ID = '00011701';

  // Basic auth: base64(apiuser:apikey)
  const credentials = Buffer.from(`${API_USER}:${API_KEY}`).toString('base64');

  // Amount in pesewas as 12-digit zero-padded string e.g. "000000008700" for GHS 87
  const amountPesewas = String(Math.round(parseFloat(amount) * 100)).padStart(12, '0');

  const bodyData = JSON.stringify({
    merchant_id: MERCHANT_ID,
    transaction_id: transId,
    desc: `Registration - ${title}`,
    amount: amountPesewas,
    redirect_url: redirectUrl,
    email,
    currency: 'GHS',
    API_Key: API_KEY,
    apiuser: API_USER,
  });

  return new Promise((resolve) => {
    const options = {
      hostname: 'checkout-test.theteller.net',
      path: '/initiate',
      method: 'POST',
      headers: {
        'Authorization': `Basic ${credentials}`,
        'Merchant-Id': MERCHANT_ID,
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Content-Length': Buffer.byteLength(bodyData),
      },
    };

    const req2 = https.request(options, (response) => {
      const status = response.statusCode;
      const location = response.headers['location'];

      // If TheTeller returns a redirect, the Location IS the checkout URL
      if ((status === 301 || status === 302 || status === 307) && location) {
        const cleanUrl = location.replace('www.checkout-test.theteller.net', 'checkout-test.theteller.net');
        res.status(200).json({ checkout_url: cleanUrl });
        return resolve();
      }

      let raw = '';
      response.on('data', chunk => { raw += chunk; });
      response.on('end', () => {
        let data;
        try { data = JSON.parse(raw); } catch { data = { raw }; }
        res.status(200).json({ httpStatus: status, ...data });
        resolve();
      });
    });

    req2.on('error', (err) => {
      res.status(200).json({ error: 'fetch_failed', details: err.message });
      resolve();
    });

    req2.write(bodyData);
    req2.end();
  });
};
