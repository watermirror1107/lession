//数据类型7个 string number null boolean object undefined symbol
//数据又可以分为基础和引用两种，基础的可以使用typeof来判断类型,引用的通过instanceof判断类型或者Object.prototype.toString.call(对象)
//基础的有string number boolean symbol undefined
//引用类型
//typeof 数组 ==object
//typeof null ==object
//所以不能用typeof来判断引用类型数据的类型，但是function除外，他是属于object可是又可以用typeof来判断类型 typeof function==function
//特殊情况，
let a = new Number(1);//使用New得到的就是一个对象，这里看成是构造函数，如果不使用New就是类型转换
let b=1;
a==b;//true
console.log(typeof a == "object"); //true 但是a具有数字基础类型的所有操作


//基础类型的数据用=来赋值都是深拷贝，因为基础类型的数据在内存中占用小，所以可以深拷贝，
//引用类型用=来赋值就不可以自动深拷贝，因为他们在内存中占用可能会很大，不适合深拷贝（除非需要就可以自己手动深拷贝）,所以他们用=来赋值的时候只会把内存地址赋值过去


//how to be a excellent human