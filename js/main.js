/*
使用require.config()方法，我们可以对模块的加载行为进行自定义。require.config()就写在主模块（main.js）的头部。参数就是一个对象，这个对象的paths属性指定各个模块的加载路径。*!/
*/


require.config({

    shim: {

        'moduleB'/*这里的名字必须和下面路径中的名字一样，不然会引入不到东西;*/: {

            //deps: ['jquery'],//这个模块的依赖

            exports: 'test'//这里的名字必须和模板里面要引入的东西一致

        }

    },
    baseUrl: "./module/",//也可以通过配置基础路径直接获取module文件夹下面的模板js(js后缀可以不写)，这样下面的paths:里面就不需要写很多相同的路径;这里不能写../会报错用./
    paths: {

        "moduleA": "module2",//模块的编写方式可以看module2,AMD模块编写规范
        //"jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min",//也可以通过CDN获取模板
        "moduleB":"module3",
        "moduleC":'module',
        "moduleD":'module4',
    }

});


/*、加载非规范的模块

理论上，require.js加载的模块，必须是按照AMD规范、用define()函数定义的模块。但是实际上，虽然已经有一部分流行的函数库（比如jQuery）符合AMD规范，更多的库并不符合。那么，require.js是否能够加载非规范的模块呢？

回答是可以的。

这样的模块在用require()加载之前，要先用require.config()方法，定义它们的一些特征。

举例来说，underscore和backbone这两个库，都没有采用AMD规范编写。如果要加载它们的话，必须先定义它们的特征。*/


/*　　require.config({

　　　　shim: {

　　　　　　'underscore':{
　　　　　　　　exports: '_'
　　　　　　},

　　　　　　'backbone': {
　　　　　　　　deps: ['underscore', 'jquery'],
　　　　　　　　exports: 'Backbone'
　　　　　　}

　　　　}

　　});

require.config()接受一个配置对象，这个对象除了有前面说过的paths属性之外，还有一个shim属性，专门用来配置不兼容的模块。具体来说，每个模块要定义（1）exports值（输出的变量名），表明这个模块外部调用时的名称；（2）deps数组，表明该模块的依赖性。

*/


/*主模块依赖于其他模块，这时就要使用AMD规范定义的的require()函数,异步加载模块;*/
// main.js

require(['moduleA','moduleB','moduleC','moduleD'], function (a,b,c){  //回调里面额参数名可以随便取;

    console.log(a(1,3));
    b();
    //module; //只要在依赖模块数组里面的引入就会自动调用模块,而这个模块是导出的是自己运行函数，所以不需要在回调里面引用，也会执行例如module4;


});
/*require()函数接受两个参数。第一个参数是一个数组，表示所依赖的模块，上例就是['moduleA', 'moduleB', 'moduleC']，即主模块依赖这三个模块；第二个参数是一个回调函数，当前面指定的模块都加载成功后，它将被调用。加载的模块会以参数形式传入该函数，从而在回调函数内部就可以使用这些模块。

require()异步加载moduleA，moduleB和moduleC，浏览器不会失去响应；它指定的回调函数，只有前面的模块都加载成功后，才会运行，解决了依赖性的问题。*/


//模块加载顺序就是按数组里面的顺序，a-b-c;

/*，主模块的依赖模块是['a', 'b', 'c']。默认情况下，require.js假定这三个模块与main.js在同一个目录，文件名分别为a.js，b.js和c.js，然后自动加载，可以通过require.config()函数来配置模块路径。
*/
