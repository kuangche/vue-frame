const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.base.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        proxy: {
            '/api': {
                target: 'http://www.mininglamp.com', // 表示你跨域请求的接口的域名
                changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
                pathRewrite: { '^/api': '' } // 后面可以使重写的新路径，一般不做更改
            }
        }
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});
