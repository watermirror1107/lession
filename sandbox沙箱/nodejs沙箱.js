// nodejs中使用沙箱很简单，只需要利用原生的vm模块，便可以快速创建沙箱，同时指定上下文。

const vm = require('vm');
const x = 1;
const sandbox = {x: 2};
vm.createContext(sandbox); // Contextify the sandbox.

const code = 'x += 40; var y = 17;';
vm.runInContext(code, sandbox);

console.log(sandbox.x); // 42
console.log(sandbox.y); // 17

console.log(x); // 1;
console.log(y); // y is not defined
// vm中提供了runInNewContext、runInThisContext、runInContext三个方法，三者的用法有个别出入，
// 比较常用的是runInNewContext和runInContext，可以传入参数指定好上下文对象。

// 但是vm是绝对安全的吗？不一定。

vm.runInNewContext("this.constructor.constructor('return process')().exit()");
// 通过上面这段代码，我们可以通过vm，停止掉主进程nodejs，导致程序不能继续往下执行，这是我们不希望的，解决方案是绑定好context上下文对象，同时，为了避免通过原型链逃逸（nodejs中的对象并没有像浏览器端一样进行结构化复制，导致原型链依然保留），所以我们需要切断原型链，同时对于传入的暴露对象，只提供基本类型值。

let ctx = Object.create(null);
ctx.a = 1; // ctx上不能包含引用类型的属性
vm.runInNewContext("this.constructor.constructor('return process')().exit()", ctx);
// 让我们来看一下TSW框架中是怎么使用的：

const SbFunction = vm.runInNewContext('(Function)', Object.create(null));        // 沙堆
if (opt.jsonpCallback) {
    code = `var result=null; var ${opt.jsonpCallback}=function($1){result=$1}; ${responseText}; return result;`;
    obj = new SbFunction(code)();
}
// 通过runInNewContext返回沙箱中的构造函数Function，同时传入切断原型链的空对象防止逃逸，之后再外部使用的时候，只需要调用返回的这个函数，和普通的new Function一样调用即可。

// 即使这样，我们也不能保证这是绝对的安全，毕竟可能还有潜在的沙箱漏洞呢？
