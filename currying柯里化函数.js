function currying(fn, ...args) {
    //函数长度等于参数的个数
    if (fn.length <= args.length) {
        return fn(...args);
    }
    ;
    return function (...args1) {
        return currying(fn, ...args, ...args1);
    };
}

function add(a, b, c, d) {
    return a + b * c + d;
}

add(1, 2, 3); // 6
let curryingAdd = currying(add);
console.log(
    curryingAdd(1)(2)(3)(4)
);
