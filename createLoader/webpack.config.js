const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'entry.js'),
    output: {path: path.resolve(__dirname, 'dist'), filename: "bundle.js"},
    resolveLoader: {
        modules: [path.resolve(__dirname, ''), 'node_modules']
    },
    module: {
        rules: [{test: /\.css$/, use: [{loader: 'first-loader', options: {msg: '第一次测试'}}, 'css-loader']}]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}
