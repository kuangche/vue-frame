const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        filename: 'static/js/[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    resolve: {
        alias: {
            '@': resolve('src'),
            vue$: 'vue/dist/vue.esm.js',
            mlString: resolve('src/common/string.prototype.js'),
            mlArray: resolve('src/common/array.prototype.js'),
            server: resolve('src/common/server.js')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [resolve('src'), resolve('test')],
                options: {
                    formatter: require('eslint-friendly-formatter'),
                    emitWarning: true
                }
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name].[hash:5].[ext]',
                            limit: 1024, // size <= 1kib
                            outputPath: '/static/img', // 打包后的图片放到static/img文件夹下
                            publicPath: '/static/img' // 这个路径影响css打包后的图片引用路径 background: url(/icon.fc2ea.png);
                        }
                    }
                ]
            },
            {
                test: /\.(svg|woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name].[hash:5].[ext]',
                            limit: 1024, // size <= 1kib
                            outputPath: '/static/font',
                            publicPath: '/static/font' // 这个路径影响css打包后的图片引用路径 background: url(/icon.fc2ea.png);
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({ // 自动加载模块，而不必到处 import 或 require
            echarts: 'echarts',
            ElmentUI: 'element-ui'
        }),
        new HtmlWebpackPlugin({
            template: './index.html', // 本地模板文件的位置，支持加载器(如handlebars、ejs、undersore、html等)，如比如 handlebars!src/index.hbs；
            filename: './index.html', // 输出文件的文件名称，默认为index.html，不配置就是该文件名；此外，还可以为输出文件指定目录位置（例如'html/index.html'）
            title: 'Webpack App', // 生成的html文档的标题
            inject: true, // 1、true或者body：所有JavaScript资源插入到body元素的底部2、head: 所有JavaScript资源插入到head元素中3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
            showErrors: true, // 是否将错误信息输出到html页面中
            hash: true, // 是否为所有注入的静态资源添加webpack每次编译产生的唯一hash值
            minify: false, // 传递 html-minifier 选项给 minify 输出
            favicon: ''// 添加特定的 favicon 路径到输出的 HTML 文件中。
        }),
        new ExtractTextPlugin({
            filename: 'static/css/style.css'
        })
    ]
};
