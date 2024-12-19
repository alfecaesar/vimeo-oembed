const fetch = require('node-fetch');

module.exports = async (req, res) => {
  // Extract query parameters
  const vimeoUrl = req.query.url;
  const referer = req.query.referer;

  if (!vimeoUrl || !referer) {
    return res.status(400).send('Missing required query parameters: url and referer');
  }

  try {
    const response = await fetch(`https://vimeo.com/api/oembed.json?url=${encodeURIComponent(vimeoUrl)}`, {
      method: 'GET',
      headers: {
        'Referer': referer,
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching Vimeo data:', error);
    res.status(500).send('Error fetching Vimeo data');
  }
};
