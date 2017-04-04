const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/app.js',
    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Airbnb Listing Search',
            template: './public/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                },
                    {
                        loader: 'autoprefixer-loader'
                    }]
            },
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }]
            },
            {
                test: /\.js$/,
                use: [
                    {loader: 'babel-loader'}
                ],
                exclude: /node_modules/
            },
            {
                test: /\.html$/, loader: 'raw-loader'
            }],
    },
    devtool: 'eval-source-map'
}