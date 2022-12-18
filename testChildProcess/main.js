const {fork} = require('child_process');
const newProcess = fork('./child.js');//创建一个子进程

newProcess.on('message', (msg) => {
    console.log('task end', msg);
    process.exit(-1)
});
//发送参数并启动子进程
console.log('main send msg')
newProcess.send({start: true});

console.log('do anther thing')
