let http = require('http');
let fs = require('fs');
const server = http.createServer((req, res) => {
    // 这里可以设置header信息, 如跨域等信息
    res.writeHead(200, {'Content-Type': 'text/html'});//text/plain会返回文本
    // 发送响应数据
    res.end(fs.readFileSync('./template.html', 'utf-8'));
}).listen(8080);
