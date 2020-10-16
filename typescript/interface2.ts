interface Man {
    age: number
}

let tom: Man = {
    age: 19,
    testname: 'tom'
}

interface Square {
    color: string,
    area: number
}

interface SquareConfig {
    color?: string
    width?: number

    [propName: string]: any//索引签名
}

function createSquare(config: SquareConfig): Square {
    let newSquare = {
        color: 'red',
        area: 500
    }
    if (config.color) newSquare.color = config.color;
    if (config.width) newSquare.area = Math.pow(config.width, 2);
    return newSquare
}

//索引类型数据结构的接口
interface StringArr {
    [index: number]: string//返回的只能是字符串类型的数据
    //readonly [index: number]: string//只读的
}

let testArr: StringArr = ['tony', 'tom'];


interface Counter {
    (start: number): string

    interval: number

    reset(): void
}

function getCounter(): Counter {//返回值counter是个函数，函数的返回值是字符串，counter还得有Interval和reset两个属性
    let counter = (function (start: number) {
        return 'string'
    }) as Counter;
    counter.interval = 123;
    counter.reset = function () {

    }
    return counter
}