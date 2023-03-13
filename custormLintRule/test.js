let Drop = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('data')
    }, 1000)
});
Drop.then((res) => {
    console.log(res)
});

var foo = 1
