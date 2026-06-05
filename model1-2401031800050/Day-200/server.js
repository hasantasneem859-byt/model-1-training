const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    fs.readFile('nodeex.html', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Server Error');
            return;
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });

});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});