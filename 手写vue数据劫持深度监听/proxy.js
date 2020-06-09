function proxyData(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'object') {
            obj[key] = proxyData(obj[key]);
        }
    }
    return new Proxy(obj, {
        set(target, p, value, receiver) {
            // console.log(target);//目标对象
            // console.log(p);//属性
            // console.log(value);//新的值
            // console.log(receiver);//得到代理后的实例
            update();
            target[p] = value;
        },
        get(target, p, receiver) {
            return target[p];
        }
    });
}

function update() {
    console.log('update');
}

let testData = {name: 'lik', age: 18, arr: [{father: 'tom', age: 35}, {mother: 'jim', age: '32'}]};
let obj = proxyData(testData);
