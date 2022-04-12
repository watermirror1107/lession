let x = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(123)
        resolve('data1')
    }, 1000)
})
let y = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(321)
        resolve('data2')
    }, 1000)
})

function spawn(fn) {
    return new Promise((resolve, reject) => {
        const genFn = fn();

        function next(data) {
            let result = genFn.next(data)
            if (result.done) return resolve(result.value)
            Promise.resolve(result.value).then((v) => {
                next(v)
            })
        }

        next()
    })
}

spawn(function* getdata() {
    let result1 = yield x;
    console.log(result1)
    let result2 = yield y;
    console.log(result2)
})

