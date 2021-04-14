const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';
//总结:第一个promise的then的成功回调或者失败回调其中之一，如果返回一个普通值(包括undefined代表不处理),
//就是不返回promise类型对象，就会默认走下一个链式调用then的成功回调并把返回值传递过去,如果返回一个失败的promise
//或者抛出错误（必须是抛出错误，return new error()是不行的，因为没有抛出错误，得用throw）会走下一个then的失败回调；
class Promise {
    constructor(executor) {
        this.status = PENDING;
        this.value = this.reason = undefined;
        this.onResolvedCallbacks = [];//一个Promise实例的then方法可以被调用多次，所以这里的then里面的回调需要一个数组来收集
        this.onRejectedCallbacks = [];
        const resolve = (value) => {
            if (value instanceof Promise) {
                return value.then(reject, reject)
            }
            if (this.status === PENDING) {
                this.value = value;
                this.status = FULFILLED;
                this.onResolvedCallbacks.forEach(fn => fn())
            }
        };
        const reject = (reason) => {
            if (this.status === PENDING) {
                this.reason = reason;
                this.status = REJECTED;
                this.onRejectedCallbacks.forEach(fn => fn())
            }
        }
        try {
            executor(resolve, reject)
        } catch (e) {
            reject(e)
        }
    }

    then(onFulfilled, onRejected) {
        //防止类型判断，以防传递普通值
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v;
        onRejected = typeof onRejected === 'function' ? onRejected : err => {
            throw err
        };
        let promise2 = new Promise((resolve, reject) => {//这里面的代码立即执行，就相当于new普通一个普通类，里面的函数就当场初始化参数
            //1.订阅发布用于异步
            if (this.status === PENDING) {
                this.onResolvedCallbacks.push(() => {
                    //这里用setTimeout是为了在规范里面说明onFulfilled和onRejected不能再当前事件循环里执行，只能放在当前事件循环的微任务或者下一个事件循环里,
                    //而且这样才能获取到promise2
                    setTimeout(() => {
                        try {
                            let x = onFulfilled(this.value)
                            //这里要判断x的类型是普通值就直接走resolve，
                            //判断一个对象是不是promise
                            //如果x是promise就需要判断这个promise是哪个状态，如果是resolve状态就把x的resolve参数传递给下一个then里面的成功回调,reject状态同理；
                            //如果里面抛出错误就走reject
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (e) {
                            reject(e)
                        }
                    }, 0)
                })
                this.onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onRejected(this.reason)
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (e) {
                            reject(e)
                        }
                    }, 0)
                })
            }
            //2.让promise可以运行同步就得执行下面这个2个判断，因为同步的话，函数运行到then的时候已经是
            //resolved或者reject状态了，上面的定于发布已经失效了,因为函数在订阅之前状态就从pending发生了改变
            //下面这两个判断算是补救的措施
            if (this.status === FULFILLED) {
                setTimeout(() => {
                    try {
                        let x = onFulfilled(this.value);
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0)
            }
            if (this.status === REJECTED) {
                setTimeout(() => {
                    try {
                        let x = onRejected(this.reason);
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0)
            }
        })
        return promise2
    }

}

//减少一次套用 延迟对象
Promise.deferred = function () {
    let dfd = {};
    dfd.promise = new Promise((resolve, reject) => {
        dfd.resolve = resolve
        dfd.reject = reject
    })
    return dfd
}
//一个promise直接返回resolve一个promise

//利用X的值来判断是走promise2的resolve还是reject
function resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {//这两者不能相同
        return reject(new TypeError('错误'))
    }
    //要兼容别人的promise
    if ((typeof x === 'object' && x !== null) || typeof x === 'function') {
        //promise对象必须有then方法
        let called = false;//加个开关控制一下promise的状态,这里是为了兼容别人的promise
        try {
            //有可能then方法通过defineProperty取值的时候会报错
            let then = x.then;
            if (typeof then === 'function') {
                then.call(x, y => {
                    if (called) return;
                    called = true;
                    resolvePromise(promise2, y, resolve, reject)//这里不是走resolve是因为别人的resolve里面可能又是一个promise对象
                }, r => {
                    if (called) return;
                    called = true;
                    reject(r)
                })//指定this
            } else {
                resolve(x)
            }
        } catch (e) {
            if (called) return;
            called = true;
            reject(e)
        }
    } else {
        //返回普通值直接放到promise2的resolve
        resolve(x)
    }
}

module.exports = Promise
