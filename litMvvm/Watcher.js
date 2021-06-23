import Dep from "./Dep.js";

export default class Watcher {
    constructor(vm, expr, cb) {
        this.vm = vm
        this.expr = expr
        this.cb = cb
        //初始化的时候设置旧值
        this.value = this.get()
    }

    get() {//获取旧值
        Dep.target = this;//把当前的观察者赋值给Dep.target
        let value = this.getVal(this.vm, this.expr)
        Dep.target = null;//用完销毁
        return value
    }

    getVal(vm, expr) {//获取实例对应的数据
        expr = expr.split('.')
        return expr.reduce((prev, next) => {
            return prev[next]
        }, vm.$data)
    }

    update() {
        //获取新值
        let newValue = this.get()
        //比对新老值是否一样
        if (newValue != this.value) {
            this.cb(newValue)
        }
    }
}
