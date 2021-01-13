let a = {n: 1};
let b = a;
a.x = a = {n: 2};
console.log(b)
console.log(a)

let p1 = new Promise((resolve, reject) => {
    resolve('xxxx')
})

async function foo() {
    console.log(1);
    await p1.then((x) => {
        console.log(x)
    });
    await p1.then((y) => {
        console.log('y' + y)
    })
    console.log(2)
}

console.log(0)
foo()
console.log(3)
