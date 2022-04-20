//状态模式用来解决过多的If和switch判读的；解决条件分支之间的耦合
let MarryState = function () {
    let currentState = {},//用来存储当前需要做的哪些状态
        states = {//先用一个对象存储所有的状态
            jump: function () {
                console.log('jump')
            },
            move: function () {
                console.log('move')
            },
            shoot: function () {
                console.log('shoot')
            },
            squat: function () {
                console.log('squat')
            }
        }
    return {
        changeState() {
            let arg = arguments;
            currentState = {};
            if (arg.length) {
                for (let i = 0; i < arg.length; i++) {
                    currentState[arg[i]] = true;
                }
            }
            return this;
        },
        goes() {
            console.log('触发动作')
            for (const currentStateKey in currentState) {
                currentState[currentStateKey] && states[currentStateKey]()
            }
            return this;
        }
    }
}

MarryState().changeState('jump', 'shoot').goes().changeState('squat').goes()
