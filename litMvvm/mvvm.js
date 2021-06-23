import Compile from "./Compile.js";
import Observer from "./Observer.js";

class Mvvm {
    constructor(options) {
        //把参数挂载到实例上
        this.$el = options.el
        this.$data = options.data
        if (this.$el) {
            //数据劫持设置set-get
            new Observer(this.$data)
            //编译html
            new Compile(this.$el, this)
        }
    }

}

export default Mvvm
