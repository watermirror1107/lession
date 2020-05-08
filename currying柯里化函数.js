function currying(fn, ...args) {
    //函数长度等于参数的个数
    console.log(args);
    if (fn.length <= args.length) {
        return fn(...args);
    }
    return function (...args1) {
        return currying(fn, ...args, ...args1);
    };
}

function add(a, b, c, d) {
    return a + b * c + d;
}

let curryingAdd = currying(add);
console.log(curryingAdd(3)(2)(3)(2));


