//第一，reject是用来抛出异常的，catch是用来处理异常的；
//第二：reject是Promise的方法，而then和catch是Promise实例的方法
//主要区别就是，如果在then的第一个函数里抛出了异常，后面的catch能捕获到，而then的第二个函数捕获不到。
//then的第二个参数和catch捕获错误信息的时候会就近原则，如果是promise内部报错，reject抛出错误后，then的第二个参数和catch方法都存在的情况下，只有then的第二个参数能捕获到，如果then的第二个参数不存在，则catch方法会捕获到。
let bol = true;
let x = new Promise((resolve, reject) => {
    if (bol) {
        console.log(bug)//这里的错误then中第二个参数函数可以捕获到错误，比catch先一步
        resolve(1)
    } else {
        reject(2)
    }
})
x.then((data) => {
    // console.log(bug)
    console.log(data)
}, (data) => {
    console.log('fn2')
    console.log(data)
}).catch(e => {
    console.log('catch')
    console.log(e)
})
