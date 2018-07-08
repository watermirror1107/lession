/*
require.js加载的模块，采用AMD规范。也就是说，模块必须按照AMD的规定来写。

具体来说，就是模块必须采用特定的define()函数来定义。如果一个模块不依赖其他模块，那么可以直接定义在define()函数之中。*/




define(function (){

    return  function (x,y){
        return x+y;

    };


});

//如果这个模块还依赖其他模块，那么define()函数的第一个参数，必须是一个数组，指明该模块的依赖性。

/*

define(['myLib'], function(myLib){     //这个依赖模块必须是同一个目录下的，因为没有配置路径，默认是同一目录下的;

    function foo(){

        myLib.doSomething();

    }

    return {

        foo : foo

    };

});*/
