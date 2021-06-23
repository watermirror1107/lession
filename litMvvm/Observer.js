import Dep from "./Dep.js";

export default class Observer {
    constructor(data) {
        this.observe(data)
    }

    observe(data) {
        if (!data || typeof data !== 'object') {
            return
        }
        Object.keys(data).forEach(key => {
            this.defineReactive(data, key, data[key])
            //递归劫持
            this.observe(data[key])
        })
    }

    defineReactive(data, key, value) {
        let that = this;
        let dep = new Dep();
        Object.defineProperty(data, key, {
            enumerable: true,
            configurable: true,
            get() {
                Dep.target && dep.addSub(Dep.target)
                return value
            },
            set(newValue) {
                if (newValue != value) {
                    //新值是对象也再次劫持
                    that.observe(newValue)
                    value = newValue;
                    dep.notify()
                }
            },
        })
    }
}
