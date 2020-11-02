const loaderUtils = require('loader-utils')
module.exports = function (source) {//参数就是源码
    console.log('test loader')
    //获取webpackconfig里面的loader配置参数
    const options = loaderUtils.getOptions(this)
    console.log(options)
    console.log('simple-style-loader is working');
    console.log(source);
    return (
        `let style=document.createElement('style');
        /**
      * 利用 remainingRequest 参数获取 loader 链的剩余部分
      * 利用 ‘!!’ 前缀跳过其他 loader 
      * 利用 loaderUtils 的 stringifyRequest 方法将模块的绝对路径转为相对路径
      * 将获取 css 的 require 表达式赋给 style 标签
      */
      style.innerHtml=require(${1})
      document.head.appendChild(style);
        `
    )
    return source
}
