//手写一个Promise
class SPromise {
    constructor(fn) {
        this.status = 'pending';//初始状态
        this.value = null;//成功的返回值
        this.reason = null;//失败的原因
        this.fn1Callback = [];
        this.fn2Callback = [];
        // 成功
        let resolve = (value) => {
            if (this.status === "pending") {
                this.status = 'fulfilled';
                this.value = value;
            }

        };
        // 失败
        let reject = (err) => {
            if (this.status === "pending") {
                this.status = 'rejected';
                this.reason = err;
            }
        };
        // 立即执行
        try {
            fn(resolve, reject);
        } catch (err) {
            reject(err);
        }
    }

    then(f1, f2) {
        let self = this, promise2;
        f1 = typeof f1 === 'function' ? f1 : function (v) {

        };
        f2 = typeof f1 === 'function' ? f1 : function (e) {

        };
        if (this.status === 'pending') {
            promise2 = new SPromise(function (resolve, reject) {
                self.fn1Callback.push(function (value) {
                    try {
                        let x = f1(self.data);
                        resolve(x);
                    } catch (e) {
                        reject(e);
                    }
                });
                self.fn2Callback.push(function (value) {
                    try {
                        let x = f2(self.data);
                        reject(x);
                    } catch (e) {
                        reject(e);
                    }
                });
            });
        }
        if (this.status === 'resolved') {
            promise2 = new SPromise(function (resolve, reject) {
                // 把 f1、f2 放在 try catch 里面，毕竟 f1、f2 是用户传入的，防止报错
                try {
                    let x = f1(self.data);
                    // f1 执行后，会有返回值，通过 resolve 注入到 then 返回的 promise 中
                    if (x instanceof SPromise) {
                        x.then((data) => {
                            resolve(data);
                        }, (e) => {
                            reject(e);
                        });
                    } else if (typeof x.then === 'function') {
                        x.then(function (y) {
                            resolve(y);
                        }, function (e) {
                            reject(e);
                        });
                    } else {
                        resolve(x);
                    }
                } catch (e) {
                    reject(e);
                }
            });
        }
        if (this.status === 'rejected') {
            promise2 = new SPromise(function (resolve, reject) {
                try {
                    let x = f2(self.data);
                    // f2 执行后，错误，通过 reject 注入到 then 返回的 promise 中
                    reject(x);
                } catch (e) {
                    reject(e);
                }
            });
        }
        return promise2;
    }
}

function resolvePromise(promise2, x, resolve, reject) {
    // 为了防止循环引用
    if (promise2 === x) {
        return reject(new TypeError('Chaining cycle detected for promise!'));
    }
    // 如果 x 是 promise
    if (x instanceof Promise) {
        x.then(function (data) {
            resolve(data);
        }, function (e) {
            reject(e);
        });
        return;
    }

    // 如果 x 是 object 类型或者是 function
    if ((x !== null) && ((typeof x === 'object') || (typeof x === 'function'))) {
        // 拿x.then可能会报错
        try {
            // 先拿到 x.then
            let then = x.then, called;
            if (typeof then === 'function') {
                // 这里的写法，是 then.call(this, fn1, fn2)
                then.call(x, (y) => {
                    // called 是干什么用的呢？
                    // 有一些 promise 实现的不是很规范，瞎搞的，比如说，fn1, fn2 本应执行一个，
                    // 但是有些then实现里面，fn1, fn2都会执行
                    // 为了 fn1 和 fn2 只能调用一个, 设置一个 called 标志位
                    if (called) {
                        return;
                    }
                    called = true;
                    return resolvePromise(promise2, y, resolve, reject);
                }, (r) => {
                    if (called) {
                        return;
                    }
                    called = true;
                    return reject(r);
                });
            } else {
                resolve(x);
            }
        } catch (e) {
            if (called) {
                return;
            }
            return reject(e);
        }
    } else {
        resolve(x);
    }
}
