const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const bundleConfig = require("../dll/bundle-config.json")
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: "production",
    plugins: [
        new CleanWebpackPlugin(['dist'],{
            root: path.resolve(__dirname, '../'),
            verbose: true
        }),
        new HtmlWebpackIncludeAssetsPlugin({
            assets: [bundleConfig.vendor.js],
            append: false
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('../dll/manifest.json')
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../dll/'+ bundleConfig.vendor.js),
                to: path.resolve(__dirname, '../dist'),
            }
        ])
    ]
});
