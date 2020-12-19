//根据Loaderutils获取参数
const loaderUtils = require('loader-utils')
const fs = require('fs')
const path = require('path')
//同步loader
// module.exports = function (source) {
//     const options = loaderUtils.getOptions(this)
//     // console.log(options.name)
//     const json = JSON.stringify(source).replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029')
//     return `export default ${json}`
//    //可以利用this.callback()来返回多个值
// }

//异步loader
module.exports = function (source) {
    // this.cacheable(false)//关闭缓存
    const callback = this.async()
    fs.readFile(path.join(__dirname, './text.txt'), 'utf-8', (err, data) => {
        if (err) console.log(err)
        callback(err ? err : null, data)
    })
}
//webpack的loader默认都是开启缓存的，当然如果一个loader有依赖的话，他的缓存会失效，可以利用 this.cacheable(false)关闭缓存
