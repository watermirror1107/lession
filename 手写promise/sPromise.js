class SPromise {
    constructor(fn) {
        this.status = 'pending';
        this.value = null;//用来给then后面的参数传值
        this.deffArr = [];
        let self = this;

        function resolve(newValue) {//不写成实例属性函数式为了不能再外面更改status
            this.value = newValue;
            this.status = 'fulfilled';
            setTimeout(() => {
                self.deffArr.forEach((item) => {
                    item(value);
                });
            }, 0);
        }

        fn(resolve);
    }

    then(onFulfilled) {
        if (this.status === 'pending') {
            this.deffArr.push(onFulfilled);
            return this;
        } else {
            onFulfilled(this.value);//resolve传递过来的值
            return this;
        }
    }
}