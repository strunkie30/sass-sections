const devMode = process.env.NODE_ENV !== 'production'; 
const mode = process.env.NODE_ENV == 'production' ? 'production' : 'development';

const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'test/index.js'),
    mode,
    output: {
        path: path.resolve(__dirname, 'test/dist'),
        filename: 'fluid.js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "fluid.css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'test/index.html')
        })
    ],
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader
            }, {
                loader: "css-loader", options: {
                    sourceMap: true
                }
            }, {
                loader: "sass-loader", options: {
                    sourceMap: true
                }
            }]
        }]
    }
};