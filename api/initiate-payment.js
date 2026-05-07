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

  const payload = {
    merchant_id: MERCHANT_ID,
    transaction_id: transId,
    desc: `Registration - ${title}`,
    amount: amountPesewas,
    redirect_url: redirectUrl,
    email,
    currency: 'GHS',
  };

  try {
    // Node 18+ has fetch built-in; it follows redirects automatically
    const response = await fetch('https://test.theteller.net/checkout/initiate', {
      method: 'POST',
      redirect: 'follow',
      headers: {
        'Authorization': `Basic ${credentials}`,
        'Merchant-Id': MERCHANT_ID,
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      },
      body: JSON.stringify(payload),
    });

    const raw = await response.text();
    let data;
    try { data = JSON.parse(raw); } catch { data = { raw }; }

    return res.status(200).json({ httpStatus: response.status, ...data });
  } catch (err) {
    return res.status(200).json({ error: 'fetch_failed', details: err.message, stack: err.stack });
  }
};
