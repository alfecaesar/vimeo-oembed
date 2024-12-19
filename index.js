const { vimeoOembedHandler } = require('./api/vimeo-oembed'); // Import the handler function

const express = require('express');
const app = express();

app.get('/api/vimeo-oembed', vimeoOembedHandler);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

module.exports = app; // Export for serverless use if deploying to other environments