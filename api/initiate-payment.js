export default async function handler(req, res) {
  // Allow requests from the same origin
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { transId, email, amount, title, redirectUrl } = req.body;

  if (!transId || !email || !amount || !redirectUrl) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const USERNAME    = 'databloom69f38d7a90a04';
  const API_KEY     = 'NDQ0YjQxYTEwOGJkYmQwNmVjN2JiNDdlMzkxY2ViNzM=';
  const MERCHANT_ID = 'TTM-00011701';
  const ENDPOINT    = 'https://test.theteller.net/checkout/initiate';

  const credentials = Buffer.from(`${USERNAME}:${API_KEY}`).toString('base64');
  // TheTeller expects amount in pesewas (GHS × 100)
  const amountPesewas = String(Math.round(parseFloat(amount) * 100));

  try {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${credentials}`,
        'Merchant-Id': MERCHANT_ID,
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      },
      body: JSON.stringify({
        merchant_id: MERCHANT_ID,
        transaction_id: transId,
        desc: `Registration - ${title}`,
        amount: amountPesewas,
        redirect_url: redirectUrl,
        email,
        currency: 'GHS',
      }),
    });

    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: 'Failed to reach payment provider', details: err.message });
  }
}
