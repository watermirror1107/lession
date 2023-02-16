function a() {
    let n = 1
    const b = function b() {
        n++
        if (n >= 6) {
            return n
        } else {
            return b
        }
    }
    return b
}

//链式调用，到6的时候退出
console.log(a()()()()()());
