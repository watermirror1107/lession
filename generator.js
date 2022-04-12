let data = 0;

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data++;
            resolve(data)
        }, 1000)
    })
}

function* changeData() {
    let d1 = yield getData()
    console.log(d1)
    let d2 = yield getData()
    console.log(d2)
    return 'done'
}

let change = changeData()
let x = change.next('giao1').value
// console.log(x)//是一个对象，{ value: Promise { <pending> }, done: false }
x.then(data => {
    console.log(data)
})
let y = change.next('giao2').value//generator有个特殊的地方就是d1的值是由于下一次调用next函数的参数决定的，这个时候d1等于giao2
y.then(data => {
    console.log(data)
})
