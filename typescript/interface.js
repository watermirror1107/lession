function test(obj) {
    console.log(obj.label);
}
var obj1 = { size: 'asdfdf', label: "Size 10 Object" };
var obj2 = { size: 111, label: "Size 10 Object", age: 20 };
var obj3 = { label: 'name', age: 11 };
test(obj1);
obj2.age = 999;
var funType1;
funType1 = function (d1, d2) {
    console.log(d1);
    return d2 > 10;
    // return 1
};
funType1('123', 2);
var funType2;
funType2 = function () {
    console.log('testType2');
    return 123;
};
console.log(funType2({ label: 'tony', size: 123, age: 88, height: 190 }));
