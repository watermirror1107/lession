function SPromise(fn) {
    let status = 'pending', value = null, defArr = [];
    this.then = function (f1, f2) {
        return new SPromise(function (resolve, reject) {
            handle({  //当前promise的参数对象
                onFulfilled: f1 || null,
                onRejected: f2 || null,
                resolve: resolve,
                reject: reject,
            });
        });
    };


    function resolve(val) {
        if (val && (typeof val == "object" || typeof val == "function")) {
            let then = val.then;
            if (typeof then == 'function') {
                then.call(val, resolve);
                return;
            }
        }
        value = val;
        status = 'fulfilled';
        finale();
    }

    function reject(reason) {
        status = 'rejected';
        value = reason;
        finale();
    }

    function handle(defObj) {
        if (status === 'pending') {
            defArr.push(defObj);
            return;
        }

        let cb = status === 'fulfilled' ? defObj.onFulfilled : defObj.onRejected,
            ret;
        if (cb === null) {
            cb = status === 'fulfilled' ? defObj.resolve : defObj.reject;
            cb(value);
            return;
        }
        try {
            ret = cb(value);
            defObj.resolve(ret);
        } catch (e) {
            defObj.reject(e);
        }
    }

    function finale() {
        setTimeout(() => {
            defArr.forEach((item) => {
                handle(item);
            });
        }, 0);
    }


    fn(resolve, reject);
}

SPromise.all = function (arr) {
    return new SPromise((resolve) => {
        let result = [];

        function setData(data) {
            result.push(data);
            if (arr.length === result.length) {
                resolve(result);
            }
        }

        arr.forEach(litPromise => {
            try {
                litPromise
                    .then(data => {
                        setData(data);
                    });
            } catch (e) {
                setData(e);
            }
        });
    });
};

SPromise.race = function (arr) {
    return new SPromise((resolve, reject) => {
        let settlementOccurred = false;//开关
        for (const litPromise of arr) {//这个方法并没有真正的公平，因为是按数组的顺序循环的
            litPromise.then(
                (value) => {
                    if (settlementOccurred) return;//成功直接跳出循环
                    settlementOccurred = true;
                    resolve(value);//进入下一步
                },
                (err) => {
                    if (settlementOccurred) return;
                    settlementOccurred = true;
                    reject(err);
                });
        }

    });
};
