// --------------------------------------------
// 서버 띄우기
// --------------------------------------------

let http = require('http');

let hostname = '127.0.0.1';
let port = 3000;

let server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ message: 'Hello World' }));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
