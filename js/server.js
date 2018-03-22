var http=require('http');
http.createServer(function (request,response) {
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('helow paoyou')
}).listen(9999);
console.log('Server runing at 127.0.0.1:9999');