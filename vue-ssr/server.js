const http = require('http');
const fs = require('fs');
const renderer = require('vue-server-renderer');
const Vue = require('vue');
http.createServer((req, res) => {
    const app = new Vue({
        template: `<div>123</div>`//这里的模板会插入到模板页面的注释地方<!--vue-ssr-outlet-->
    });
    renderer.createRenderer({
        template: fs.readFileSync('./template.html', 'utf-8')
    }).renderToString(app, {
        meta: `<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width">`, title: `测试`
    }, (err, html) => {
        if (err) {
            console.log(err);
            res.end('Internal Server Error');
            return;
        }
        res.end(html);
    });

}).listen(8080);
console.log('started');
