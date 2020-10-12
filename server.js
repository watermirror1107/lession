let http=require('http');
let url=require('url');
let fs=require('fs');
let server=http.createServer((req,res)=>{
    let pathName=url.parse(req.url).pathname;
    fs.readFile(pathName.substring(1),(err,data)=>{
        if(err){
            res.writeHead(404,{
                'Content-type':'text/html'
            })
        }else{
            res.writeHead(200,{
                'Content-type':'text/html'
            });
            res.write(data.toString());
        }
        //fs获取东西是异步请求，必须在获取文件回调里面执行end,如果放在fs回调之外，是不能在end之后再去改变头部
        res.end();
    });

});
server.listen(3000,'127.0.0.1',()=>{
    console.log('开启')
});