interface interface1 {
    label: string;//传入的参数必须带有这个属性
}

function test(obj: interface1) {
    console.log(obj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
test(myObj);
