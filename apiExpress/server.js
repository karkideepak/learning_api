const express = require('express');
const app = express();

const PORT = 3000;

// API endpoint for robots.txt
app.get('/robots.txt', (req, res) => {
  res.type('text/plain');

  res.send(`
User-agent: *
Disallow: /admin
Allow: /
Sitemap: https://example.com/sitemap.xml
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
