function functionType(name: string, age: number): string {
    return name + '' + age;
}


//定义函数类型
let testF: (baseV: string, increment: number) => string = function (x: string, y: number): string {
    return x + y
};