const http = require('http');

// Create the server
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello ALX!\n');
});

// Server listens on port 1245
app.listen(1245, () => {
  console.log('Server is running on http://localhost:1245');
});

// Export the app to make it accessible
module.exports = app;

