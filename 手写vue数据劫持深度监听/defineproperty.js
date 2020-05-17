function update() {
    console.log('触发了');
}

function observeData(data) {
    if (typeof data != 'object' || data == null) {
        return data;
    }
    for (let key in data) {
        if (typeof data[key] == 'object') {
            observeData(data[key]);
        }
        let o = data[key];
        Object.defineProperty(data, key, {
            set(n) {
                if (n != data[key]) {
                    update();
                    o = n;
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

