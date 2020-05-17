function update() {
    console.log('触发了');
}

function observeData(data) {
    if (typeof data != 'object' || data == null) {
        return data;
    }
    for (let key in data) {
        if (typeof data[key] == 'object') {
            //因为defineproperty只能监听第一层的属性，除非family属性改变才会被触发，所以这里要做递归才可以深度监听family对象里面的属性
            observeData(data[key]);
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

let dd = {name: 'ka', age: 19, family: {father: 'dk', mother: 'jk'}};
observeData(dd);

