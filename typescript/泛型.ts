//泛型类似一个占位符,可以多个一起用
function identity<T>(arg: T): T {
    return arg
}

function identity1<T, U>(a1: T, a2: U): T {
    return a1
}

// let output = identity<string>('test')
// function arrNumber<T>(a1: T[]): T[] {
//     return a1
// };

//通过接口的方式来设置泛型，利用传值来确定类型
interface Gennerate<T> {
    (arg: T): T
}

let id: Gennerate<number> = identity

//泛型类
class NewNumber<T> {
    //静态属性是不能使用泛型类型的
    defaultValue: T
    add: (x: T, y: T) => T
}

let n1 = new NewNumber<string>()
n1.defaultValue = '88';
n1.add = function (x, y) {
    return x + y
}
let n2 = new NewNumber<number>()
n2.defaultValue = 1;
n2.add = function (x, y) {
    return x + y
}

//泛型约束
interface lengthwise {
    length: number
}

function testGeneric<T extends lengthwise>(ar: T): T {
    console.log(ar.length)
    return ar
}

testGeneric({length: 2})

function getProperty<T, K extends typeof T>(obj: T, key: K) {
    return obj[key]
}

let xx = {a: 1, b: 2}
getProperty(xx, 'a')
getProperty(xx, 'c')

//类的类型泛型的使用,定义构造函数类型
function create<T>(c: { new(): T }): T {
    return new c()
}

//例子2
class BeeKeeper {
    hasMask: boolean
}

class LionKeeper {
    nametag: string
}

class Animal1 {
    numLength: number
}

class Bee extends Animal1 {
    keeper: BeeKeeper
}

class Lion extends Animal1 {
    keeper: LionKeeper
}

function createInstance<T extends Animal1>(c: new() => T): T {
    return new c()
}

createInstance(Lion).keeper.nametag
createInstance(Bee).keeper.hasMask