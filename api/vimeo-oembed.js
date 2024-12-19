// /api/vimeo-oembed.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
  const vimeoUrl = req.query.url;
  const referer = req.query.referer;

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (!vimeoUrl || !referer) {
    console.error('Missing required query parameters');
    return res.status(400).json({ error: 'Missing required query parameters: url and referer' });
  }

  try {
    console.log('Fetching Vimeo data...');
    const response = await fetch(`https://vimeo.com/api/oembed.json?url=${encodeURIComponent(vimeoUrl)}`, {
      method: 'GET',
      headers: {
        'Referer': referer,
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36'
      }
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      console.error('Error fetching Vimeo data:', errorMessage);
      return res.status(500).json({ error: 'Error fetching Vimeo data' });
    }

    const data = await response.json();
    console.log('Vimeo data:', data);
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Error fetching Vimeo data' });
  }
};
