const https = require('https');

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

  return new Promise((resolve) => {
    const options = {
      hostname: 'test.theteller.net',
      path: '/checkout/initiate',
      method: 'POST',
      headers: {
        'Authorization': `Basic ${credentials}`,
        'Merchant-Id': MERCHANT_ID,
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Content-Length': Buffer.byteLength(bodyData),
      },
    };

    const httpreq = https.request(options, (httpres) => {
      let raw = '';
      httpres.on('data', chunk => { raw += chunk; });
      httpres.on('end', () => {
        let data;
        try { data = JSON.parse(raw); } catch { data = { raw }; }
        res.status(200).json({ httpStatus: httpres.statusCode, ...data });
        resolve();
      });
    });

    httpreq.on('error', (err) => {
      res.status(200).json({ error: 'fetch_failed', details: err.message });
      resolve();
    });

    httpreq.write(bodyData);
    httpreq.end();
  });
};
