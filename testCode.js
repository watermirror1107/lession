let num = 60;

function time() {
    console.log(num)
    if (num > 1) {
        setTimeout(() => {
            num--;
            time()
        }, 1000)
    }
}

// time();
let arr = [1, -3, 8, -7, 5, 3], mid = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        mid.push(arr[i])
        arr[i] = 'm'
    }
}
mid.sort()
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'm') {
        arr[i] = mid.shift();
    }
}
console.log(arr)

try {
    new Promise((resolve, reject) => {
        reject('reject')
    }).then((x) => {
        console.log(x)
    }).catch(e => {
        console.log('catch')
        console.log(e)
    })
} catch (e) {
    console.log(1)
}
