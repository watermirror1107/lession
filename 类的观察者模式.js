class Subject {
    constructor(name) {
        this.name = name;
        this.state = '非常痛苦';
        this.observers = [];
    }

    attach(ob) {//数据收集
        this.observers.push(ob)
    }

    setState(newState) {
        this.state = newState;
        this.observers.forEach(item => item.update(this.name, newState))
    }
}

class Observer {
    constructor(name) {
        this.name = name;
    }

    update(s, state) {
        console.log(this.name + ':' + s + '当前' + state)
    }
}

let baby = new Subject('痛苦宝宝')
let obj1 = new Observer('father');
let obj2 = new Observer('mother');
baby.attach(obj1);
baby.attach(obj2);
baby.setState('饿了');
baby.setState('尿床了');
