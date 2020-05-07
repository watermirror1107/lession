function currying(fn, ...args) {
    if (fn.length <= args.length) {
        return fn(...args);
    }
    return function (...args1) {
        return currying(fn, ...args, ...args1);
    };
}

function add(a, b, c) {
    return a + b + c;
}

add(1, 2, 3); // 6
let curryingAdd = currying(add);
curryingAdd(1)(2)(3); // 6
