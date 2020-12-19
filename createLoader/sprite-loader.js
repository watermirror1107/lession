const Spritesmith = require('spritesmith')
const fs = require('fs')
const path = require('path')
module.exports = function (source) {
    const callback = this.async();
    const imgs = source.match(/url\((\S*)\?_sprite/g);
    const matchedImgs = [];
    for (let i = 0; i < imgs.length; i++) {
        const img = imgs[i].match(/url\((\S*)\?_sprite/)[1];
        matchedImgs.push(path.join(__dirname, img));
    }
    Spritesmith.run({src: matchedImgs}, (err, res) => {
        //process.cwd()获取运行目录和pwd一样
        //loader-runner没有this.emitfile方法所以这里用fs模块的输出文件来模拟
        fs.writeFileSync(path.join(process.cwd(), '/dist/sprite.jpg'), res.image)
        source = source.replace(/url\((\S*)\?_sprite/g, match => {
            return `url('dist/sprite.jpg'`
        });
        callback(null, source)
    })
}
