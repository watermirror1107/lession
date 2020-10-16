interface interface1 {
    label: string;//传入的参数必须带有这个属性并且类型是字符串
    size?: number;//非必要参数，但是传的时候必须是数字类型
    readonly age: number;//只读属性也是必传的
    [propName: string]: any//额外属性，非必传可以有无数个，但是不能是label,size,age
}

function test(obj: interface1) {
    console.log(obj.label);
}

let obj1 = {size: 'asdfdf', label: "Size 10 Object"};
let obj2: interface1 = {size: 111, label: "Size 10 Object", age: 20};
let obj3: interface1 = {label: 'name', age: 11}
test(obj1);
obj2.age = 999;

//函数类型的接口,声明了参数就必须传
interface fun1 {
    (source: string, subString: number): string;//参数2个，source和substring，返回值必须是布尔值
}

let funType1: fun1;
funType1 = function (d1, d2) {//参数的名字可以和函数类型声明时候不一样，但是类型和顺序必须是一样的；
    console.log(d1)
    return d1
    // return 1
}
funType1('123', 2)

interface fun2 {
    (source: interface1): number;//参数1个类型是对象，对象的类型是interface1，返回值必须是空，就是没有限定，可以随便返回
}

let funType2: fun2;
funType2 = function () {
    console.log('testType2');
    return 123;
}
console.log(funType2({label: 'tony', size: 123, age: 88, height: 190}));

//可索引的类型接口用于数组和对象
interface strArr {
    [index: number]: string//通过索引返回的属性类型必须是字符串,
}

let strArray: strArr;
strArray = ['a', 'b'];
let strItem: string = strArray[0]

interface NumberDictionary {
    readonly [index: number]: number;//使用数字作为索引的时候不能修改
    //length: number;    // 可以，length是number类型
    //name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
}

let errorArr: NumberDictionary = [13, 16];
errorArr[0] = 18;
errorArr['1'] = 18;//使用字符串作为索引的时候能修改
//继承接口
//一个接口可以继承多个接口，创建出多个接口的合成接口。
interface person1 {
    name: string
}

interface person2 {
    age: number
}

interface person extends person1, person2 {
    height: number
}

let dingding: person = {
    name: 'dingding',
    age: 18,
    height: 190
}
let kankan = <person>{};//person接口类型的对象，只能有对象里面的属性不能有额外的属性
kankan.name = 'kankan'
kankan.sex = 'man'

