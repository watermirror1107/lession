var bar = {
    myName: "time.geekbang.com",
    printName: function () {
        console.log(myName)
    }
}

function foo1() {
    let myName = "极客时间"
    return bar.printName//这个地方只是一个指针的效果，这个函数的作用域链在声明的时候就确定了，在第四行的时候就确定，其中的myname指向全局作用域中的myname
}

function foo2() {
    let myName = "极客时间"
    return function () {//这个函数在这里声明，所以他的myname指向foo2内部的myname
        console.log(myName)
    }
}

let myName = "极客邦"
let _printName1 = foo1()
let _printName2 = foo2()
_printName1()
_printName2()
bar.printName()


var shitname = 'shit1';

function showname() {
    console.log(shitname)
    if (0) {
        var shitname = 'fuck1'
    }
    console.log(shitname)
}

showname()
