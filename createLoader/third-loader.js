const loaderUtils = require('loader-utils')
const fs = require('fs')
const path = require('path')
//利用emitfile来输出文件
module.exports = function (source) {
    const url = loaderUtils.interpolateName(this, '[name].[ext]', source)//获取配置的占位符
    // console.log('url',url)
    this.emitFile(url, source)//把内容输出到制定目录下的制定文件，这个方法是webpack才有的，loader-runner没有不能调试
    return source
}
