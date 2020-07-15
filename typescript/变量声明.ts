//数组
let arr: number[] = [1, 23];
//数组泛类 只能指定一个类型
let arr1: Array<number> = [1, 3, 4]//数组里面的Item类型都必须是指定的number
let arr2: Array<string> = ['a', 'b']
//元组 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。长度和类型都是已知的，就连顺序也是，只能按照声明时候的类型排列
let x: [string, number, boolean] = ['adsf', 1, true]
//数字
let num: number = 1;
//布尔值
let isReally: boolean = true;
//字符串
let str: string = 'abc';
//对象
let obj: object = {name: 'dd'}

