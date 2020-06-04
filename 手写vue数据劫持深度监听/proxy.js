function proxyData(obj) {
    return new Proxy(obj, {
        set(target, p, value, receiver) {
            // console.log(target);//目标对象
            // console.log(p);//属性
            // console.log(value);//新的值
            // console.log(receiver);//得到代理后的实例
        },
        get(target, p, receiver) {
            return target[p];
        }
    });
}

let testData = {name: 'asdf', age: 18};
let obj = proxyData(testData);
