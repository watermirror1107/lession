function wholeObject(obj: { a: string, b?: number }) {
    let {a, b = 100} = obj;
    console.log(a)
}

let testArr1: number[] = [1, 2, 3];
let testArr2: ReadonlyArray<number> = testArr1;//arr2是可读的不可进行操作

