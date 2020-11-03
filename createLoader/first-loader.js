const loaderUtils = require('loader-utils')
module.exports = function (source) {//参数就是源码
    console.log('loader')
    //获取webpackconfig里面的loader配置参数
    const options = loaderUtils.getOptions(this)
    console.log(options)
    return source
}
//`pitch` 是 loader 上的一个方法，它的作用是阻断 loader 链。如果任何 pitch 有返回值，则 loader 链被阻断。webpack 会跳过后面所有的的 pitch 和 loader，直接进入上一个 loader 的 `normal execution`。
// loader上的pitch方法，非必须
module.exports.pitch = function (remainingRequest) {
// remainingRequest：loader链中排在自己后面的 loader 以及资源文件的绝对路径以`!`作为连接符组成的字符串。
// precedingRequest：loader链中排在自己前面的 loader 的绝对路径以`!`作为连接符组成的字符串。
// data：每个 loader 中存放在上下文中的固定字段，可用于 pitch 给 loader 传递数据
    console.log(loaderUtils.stringifyRequest(this, '!!' + remainingRequest));
    console.log('pitch');
    return (
        `let style=document.createElement('style');
        /**
      * 利用 remainingRequest 参数获取 loader 链的剩余部分
      * 利用 ‘!!’ 前缀跳过其他 loader 
      * 利用 loaderUtils 的 stringifyRequest 方法将模块的绝对路径转为相对路径
      * 将获取 css 的 require 表达式赋给 style 标签
      */
      style.innerHtml=require(${loaderUtils.stringifyRequest(this, '!!' + remainingRequest)})
      document.head.appendChild(style);
      `
    )
}
//pitch 方法不是必须的。如果有 pitch，loader 的执行则会分为两个阶段：
// `pitch` 阶段 和 `normal execution` 阶段。webpack 会先从左到右执行
// loader 链中的每个 loader 上的 pitch 方法（如果有），然后再从右到左执行
// loader 链中的每个 loader 上的普通 loader 方法。
