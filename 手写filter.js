let testArr = [1, 2, 3, 4, 5];
Array.prototype.filter = function (fn, vThis) {//filter接受两个参数一个是回调一个是用来改变this的对象,回调函数里面有三个参数，回调只能返回布尔值
// element 数组中当前正在处理的元素。
// index  正在处理的元素在数组中的索引。
// array  调用了 filter 的数组本身。
    let _this, arr = this, res = [];
    if (!arr instanceof Array) throw new Error('只能用在数组上');
    if (typeof fn != 'function') throw new Error('回调函数必须是函数');
    if (arguments.length > 1) _this = vThis;
    for (let i = 0; i < arr.length; i++) {
        if (fn.call(_this, arr[i], i, arr)) res.push(arr[i]);
    }
    return res;
};
console.log(testArr.filter((i) => i % 2 == 0));
