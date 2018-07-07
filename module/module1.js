export default function foo() {
    console.log('foo');
}

// 或者写成

function foo() {
    console.log('foo');
}

export default foo;    //导出默认，另一种写法export {foo as default}但是默认导出的话，只能是一个
//在引入改模板的时候不需要知道这个模板的导出模块名，可以自己定义