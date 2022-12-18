function task(data) {//子进程处理逻辑的函数
    console.log('data:' + data);
    console.log('task starting');
    setTimeout(() => {
        process.send({end: true});//告诉主进程结束了
    }, 5000)

}

//子进程在接收到主进程后开始执行对应代码
process.on('message', (msg) => {
    console.log('child get start msg')
    task(msg.start)
})

