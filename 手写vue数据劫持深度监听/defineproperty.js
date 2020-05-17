//defineproperty缺点，1深度监听需要递归，一次计算量大，2无法监听删除和添加属性,3对数组需要做特殊处理
function update() {
    console.log('触发了');
}

//定义一个新的数组原型，拥有原数组原型的方法并且数据可以被监听,又不会对原数组的方法造成影响
const vArrProperty = Object.create(Array.prototype);
['push', 'pop', 'unshift', 'splice', 'shift'].forEach(methodName => {
    vArrProperty[methodName] = function () {
        update();
        Array.prototype[methodName].call(this, ...arguments);
    };
});


function observeData(data) {
    if (typeof data != 'object' || data == null) {
        return data;
    }
    for (let key in data) {
        if (typeof data[key] == 'object') {
            //因为defineproperty只能监听第一层的属性，除非family属性改变才会被触发，所以这里要做递归才可以深度监听family对象里面的属性
            observeData(data[key]);
        }
        if (data[key] instanceof Array) {
            data[key].__proto__ = vArrProperty;
        }
        let o = data[key];//这里要复制一下值，不然堆栈溢出
        Object.defineProperty(data, key, {
            set(n) {
                if (n != o) {
                    observeData(n);//做这一步是因为怕新值是个对象（比如dd.name={fname:'df',sname:'dk'}），造成新的对象不能被监听，所以做递归，这样dd.name.fname被改变时候也会监听到
                    update();
                    o = n;//要把新值赋给O
                }
            },
            get() {
                return o;
            }
        });
    }
}

let dd = {name: 'ka', age: 19, family: {father: 'dk', mother: 'jk'}, arr: [1, 2, 3]};
observeData(dd);

