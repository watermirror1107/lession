const React = require('react')
const {renderToString} = require('react-dom/server')
const http = require('http')
import {matchRoutes} from "react-router-config";
import {routes} from './routes/index'


http.createServer((req, res) => {
    //简单容错，排除图片等资源文件的请求
    const {url} = req
    if (url.indexOf('.') > -1) {
        res.end('');
        return false;
    }
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    //查找组件
    const branch = matchRoutes(routes, url);

    //得到组件
    const Component = branch[0].route.component;
    //数据预取
    const data = Component.getInitialProps(branch[0].match.params);
    //将组件渲染为 html 字符串
    const html = renderToString(<Component data={data}/>);

    res.end(html);

}).listen(8080)
