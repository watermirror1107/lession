import Watcher from "./Watcher.js";

export default class Compile {
    constructor(el, vm) {
        this.el = this.isElementNode(el) ? el : document.querySelector(el);
        this.vm = vm
        if (this.el) {//容器为空不处理
            //    1.先把这些真实的节点放到内存中，减少dom操作，提高性能，利用文档碎片fragment
            let fragment = this.node2fragment(this.el)
            //    2.编译，提取想要的元素节点v-model {{}}
            this.compile(fragment)
            //    3.把编译好的fragment放到页面上
            this.el.appendChild(fragment)
        }
    }

    //    辅助
    /**
     * @description:判断是否是dom节点
     */
    isElementNode(node) {

        return node.nodeType === 1;
    }

    /**
     * @description:判断属性是不是指令
     */
    isDirective(name) {
        return name.includes('v-')
    }

    //    主要
    /**
     * @description:把真实节点存到内存
     */
    node2fragment(el) {
        let fragmemt = document.createDocumentFragment();
        let firstChild;
        while (firstChild = el.firstChild) {
            fragmemt.appendChild(firstChild)
        }
        return fragmemt
    }

    /**
     * @description:编译模板 递归
     */
    compile(fragment) {
        let childNodes = fragment.childNodes;
        Array.from(childNodes).forEach(node => {
            if (this.isElementNode(node)) {
                //dom节点
                //有子节点
                this.compileElement(node)
                this.compile(node)
            } else {
                //文本
                this.compileText(node)
            }
        })
    }

    /**
     * @description:编译DOM节点
     */
    compileElement(node) {
        //获取节点上的标签属性判断是否是v-model或者其他的
        let attrs = node.attributes
        Array.from(attrs).forEach(attr => {
            const {value, name} = attr
            if (this.isDirective(name)) {//判断是不是v-之类的指令
                let expr = value//获取这个属性的值，这个值有可能是一个表达式
                let type = name.slice(2)
                CompileUtil[type](node, this.vm, expr)
            }
        })
    }

    /**
     * @description:编译文本
     */
    compileText(node) {
        let expr = node.textContent;//获取文本内容
        let reg = /\{\{([^}]+)\}\}/g
        if (reg.test(expr)) {
            CompileUtil['text'](node, this.vm, expr)
        }
    }
}

const CompileUtil = {
    getVal(vm, expr) {//获取实例对应的数据
        expr = expr.split('.')
        return expr.reduce((prev, next) => {
            return prev[next]
        }, vm.$data)
    },
    getTextVal(vm, expr) {
        return expr.replace(/\{\{([^}]+)\}\}/g, (...arg) => {
            return this.getVal(vm, arg[1])
        })
    },
    text(node, vm, expr) {
        let updateFn = this.updater['textUpdater'];
        let value = this.getTextVal(vm, expr)
        expr.replace(/\{\{([^}]+)\}\}/g, (...arg) => {
            new Watcher(vm, arg[1], () => {
                updateFn && updateFn(node, this.getTextVal(vm, expr))
            })
        })

        updateFn && updateFn(node, value)
    },
    setVal(vm, expr, value) {
        expr = expr.split('.')
        return expr.reduce((pre, next, currentIndex) => {
            if (currentIndex === expr.length - 1) {
                return pre[next] = value;
            }
            return pre[next]
        }, vm.$data)
    },
    model(node, vm, expr) {
        let updateFn = this.updater['modelUpdater'];
        //在引用的地方创建一个观察者
        new Watcher(vm, expr, (newValue) => {
            updateFn && updateFn(node, this.getVal(vm, expr))
        })
        node.addEventListener('input', (e) => {
            this.setVal(vm.expr, e.target.value)
        })
        updateFn && updateFn(node, this.getVal(vm, expr))
    },
    updater: {
        //文本更新
        textUpdater(node, value) {
            node.textContent = value;
        },
        //输入框更新
        modelUpdater(node, value) {
            node.value = value
        }
    }
}
