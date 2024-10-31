// Create web server 
// Create a web server and respond to requests with a simple "Hello World" message. 
// The server should listen on port 3000. 
// Use the createServer method from the http module to create the server.

const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello World');
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
