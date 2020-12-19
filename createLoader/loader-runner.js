const {runLoaders} = require('loader-runner')//检测loader的工具
const fs = require('fs')
const path = require('path')

runLoaders({
    // resource: path.resolve(__dirname, 'test-entry.js'),
    resource: path.resolve(__dirname, 'sprite.css'),
    loaders: [
        {
            // loader: path.join(__dirname, './third-loader.js'),
            loader: path.resolve(__dirname, './sprite-loader.js'),
            options: {
                name: 'test'
            }
        }
    ],
    context: {
        minimize: true
    },
    readResource: fs.readFile.bind(fs)
}, (err, result) => {
    console.log(err ? err : result);
})
