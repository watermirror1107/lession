function timeout(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, time)
    })
}

class SuperTask {

    constructor() {
        this.queue = [];
        this.count = 0;
        this.limit = 2;
    }

    add(task) {
        return new Promise((resolve, reject) => {
            this.queue.push({
                resolve,
                reject,
                task
            })
            this.run();
        })
    }

    run() {
        while (this.queue.length > 0 && this.count < this.limit) {
            const {resolve, task} = this.queue.shift()
            this.count++;
            task().then(() => {
                resolve();
                this.count--;
                this.run();
            })
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
