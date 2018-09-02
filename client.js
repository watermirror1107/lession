var http=require('http');
//模拟客户端
http.get('http://www.imooc.com/u/card',(res)=>{
    let data='';
    //开始接收到数据
    res.on('data',(chunk)=>{
        data+=chunk;
    });
    //数据接收完毕
    res.on('end',()=>{
        let result=JSON.parse(data);
        //接受完回来的数据data是字符串要转化一下
        console.log(`first:${result.msg}`);
    })
});