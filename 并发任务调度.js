function timeout(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, time)
    })
}

class SuperTask {
    static limit = 2;
    constructor() {
        this.queue = [];
        this.count = 0;
    }
    add(task) {
        let x = new Promise(resolve => {
            this.queue.push(resolve)
        }).then(() => {
            return task();
        }).then(() => {
            this.count--;
            this.run()
            return Promise.resolve()
        });
        this.run()
        return x
    }
    run() {
        if (this.queue.length > 0 && this.count < SuperTask.limit) {
            this.count++;
            this.queue.shift()();
        }
    }

}

const superTask = new SuperTask();

function addTask(time, name) {
    superTask
        .add(() => timeout(time))
        .then(() => {
            console.log(`task done ${name}`)
            console.timeLog()
        });
}

console.time()
addTask(10000, '1')//10000ms
addTask(5000, '2')//5000ms
addTask(3000, '3')//8000ms
addTask(4000, '4')//12000ms
addTask(5000, '5')//15000ms
