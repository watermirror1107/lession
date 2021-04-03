//思路就是吧要被call或apply的函数复制到target上面，并吧参数带入运行，在运行之后删除方法，并把结果return出去
Function.prototype._call = function (target, ...args) {
    target.fn = this;//this执行调用call的对象，这个对象正好就是要被call的函数
    // console.log(target)
    let res = target.fn(...args)
    delete target.fn
    return res
}
Function.prototype._apply = function (target, args) {
    target.fn = this;
    // console.log(target)
    let res = target.fn(args)
    delete target.fn
    return res
}
let obj = {
    age: 18,
    tellAge(data) {
        console.log(data + this.age)
    }
}
let obj2 = {age: 20};
// obj.tellAge()
obj.tellAge._call(obj2, 3)
obj.tellAge._apply(obj2, 6)
