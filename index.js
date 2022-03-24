const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Received ' + req.method + ' request for' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World');
});

server.listen(8080, '127.0.0.1', null, () => {
    console.log('Server is listening on localhost:8080');
});
