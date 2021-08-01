function a(...arg) {
    console.log('a', arg)
}

//想要不改动a函数的情况下，去拓展a函数；
//思路1修改函数原型,缺点 1会修改所有函数的原型2获取不到a函数里面的变量
Function.prototype.before = function (cb) {
    return (data) => {
        cb()
        this(data)
    }
}
let b = a.before(() => {
    console.log('it is cb')
});
b('test')

//思路二 //闭包和柯里化
function after(time, cb) {
    let arr = [];
    return (data) => {
        arr.push(data)
        if (arr.length >= time) {
            cb(arr)
        }
    }
}

out = after(2, (data) => {
    console.log(data)
})
out(1)
out(2)
