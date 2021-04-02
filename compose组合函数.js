//compose的功能就是把上一个函数的结果传递给下一个函数合成一个函数,执行顺序是从右到左
function compose() {
    let arr = arguments;
    return function (data) {
        for (let i = arr.length - 1; i > -1; i--) {
            data = arr[i](data);
        }
        return data
    }
}

function a(x) {
    return x / 2
}

function b(x) {
    return x + 2
}

function c(x) {
    return Math.pow(x, 2)
}

let test = compose(a, b, c);//顺序是C-B-A
let x = test(2);
console.log(x)
