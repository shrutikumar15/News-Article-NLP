const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Require the dependencies to run common file
const common = require('./webpack.common');
const merge = require('webpack-merge');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'none',
    output: {
        filename: 'main.[contentHash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'var',
        library: 'Client'
    },
    module:{
        rules:[
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },        
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/client/views/index.html',
            filename: 'index.html'
        }),   
    ]
})