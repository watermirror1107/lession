//根据Loaderutils获取参数
const loaderUtils = require('loader-utils')
module.exports = function (source) {
    const options = loaderUtils.getOptions(this)
    console.log(options.name)
    const json = JSON.stringify(source).replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029')
    return `export default ${json}`
}
