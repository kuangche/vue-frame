const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const AssetsPlugin = require('assets-webpack-plugin')

module.exports = {
    entry: {
        vendor: ['vue/dist/vue.esm.js', 'vuex']
    },
    output: {
        path: path.join(__dirname, '../dll'), // 生成的文件存放路径
        filename: '[name].[hash:6].js', // 生成的文件名字(默认为vendor.dll.js)
        library: '[name]_[hash:6]' // 生成文件的映射关系，与下面DllPlugin中配置对应
    },
    mode: 'development',
    plugins: [
        new CleanWebpackPlugin(['dll', 'dist'], {
            root: path.resolve(__dirname, '../'),
            verbose: true
        }),
        new webpack.DllPlugin({
            path: path.resolve('./dll', 'manifest.json'),
            name: '[name]_[hash:6]',
            context: __dirname // 上下文环境路径（必填，为了与DllReferencePlugin存在与同一上下文中）
        }),
        // 保存hash信息，把带hash的dll插入到html中
        new AssetsPlugin({
            filename: 'bundle-config.json',
            path: path.resolve(__dirname, '../dll')
        })
    ]
}
