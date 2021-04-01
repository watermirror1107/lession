let Promise1 = require('./class手写promise');
let x = new Promise1((resolve, reject) => {
    console.log('dd')
    // setTimeout(()=>{
    resolve(9)//调用resolve
    // },2000)
}).then((value) => {
    console.log(value)
}, (reason) => {
    console.log(reason)
})

x.then((value) => {
    console.log('more time' + value)
})
