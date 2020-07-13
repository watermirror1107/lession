interface interface1 {
    label: string;//传入的参数必须带有这个属性并且类型是字符串
    size?: number//非必要参数，但是传的时候必须是数字类型
}

function test(obj: interface1) {
    console.log(obj.label);
}

let obj1 = {size: 'asdfdf', label: "Size 10 Object"};
let obj2 = {size: 111, label: "Size 10 Object"};
test(obj1);
test(obj2)
