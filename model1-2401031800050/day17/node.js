//  <!-- write a js code in find a even odd number and run terminal . -->
var http = require('http');

http.createServer((req, res)=> {
    res.end('Hello World!');
    let number = 5;

    if (number % 2 === 0) {
        console.log(`${number} is an Even number.`);
    } else {
        console.log(`${number} is an Odd number.`);
    };
}).listen(8080)


