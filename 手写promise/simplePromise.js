class SimplePromise {
    constructor(fn) {
        this.value = null;
        this.defArr = [];
        this.status = 'pending';

        function resolve(newValue) {
            this.value = newValue;
            this.status = 'fulfilled';
            //给resolve做延迟处理，不然同步的话resolve会在then之前执行，这样then还未给defArr数组添加回调事件，后面的事件就不会被调用；而且resolve的异步函数必须在then添加回调之后才开始，所以要引入状态来控制
            setTimeout(() => {
                this.defArr.forEach(function (item) {
                    item(value);
                });
            }, 0);

        }

        fn(resolve);
    }

    then(onFulfilled) {
        if (this.status == 'pending') {//当状态是pending的时候添加到数组，不是pending的时候直接执行
            this.defArr.push(onFulfilled);
            return this;
        }
        onFulfilled(this.value);//立即执行
        return this;
    }


}

// function Promise(fn) {
//     var value = null,
//         deferreds = [];
//
//     this.then = function (onFulfilled) {
//         deferreds.push(onFulfilled);
//     };
//
//     function resolve(value) {
//         deferreds.forEach(function (deferred) {
//             deferred(value);
//         });
//     }
//
//     fn(resolve);
// }