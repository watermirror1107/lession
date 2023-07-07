class MyPromise {
    constructor(executor) {
        // 用于保存 resolve 的值
        this.value = null;
        // 用于保存 reject 的值
        this.reason = null;
        // 用于保存 then 的成功回调
        this.onFulfilled = null;
        // 用于保存 then 的失败回调
        this.onRejected = null;

        // executor 的 resolve 参数
        // 用于改变状态 并执行 then 中的成功回调
        let resolve = value => {
            this.value = value;
            this.onFulfilled && this.onFulfilled(this.value);
        }

        // executor 的 reject 参数
        // 用于改变状态 并执行 then 中的失败回调
        let reject = reason => {
            this.reason = reason;
            this.onRejected && this.onRejected(this.reason);
        }

        // 执行 executor 函数
        // 将我们上面定义的两个函数作为参数 传入
        // 有可能在 执行 executor 函数的时候会出错，所以需要 try catch 一下
        try {
            executor(resolve, reject);
        } catch (err) {
            reject(err);
        }
    }

    // 定义 then 函数
    // 并且将 then 中的参数复制给 this.onFulfilled 和 this.onRejected
    then(onFulfilled, onRejected) {
        this.onFulfilled = onFulfilled;
        this.onRejected = onRejected;
    }
}


new MyPromise((resolve, reject) => {
    // setTimeout(() => {
    resolve('成功了');
    // }, 1000);
}).then((data) => {
    console.log(data);
}, (err) => {
    console.log(err);
})
