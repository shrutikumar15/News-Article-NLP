const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Require the dependencies to run common file
const common = require('./webpack.common');
const merge = require('webpack-merge');

// Require other plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');    

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: 'main.[contentHash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'var',
        library: 'Client'
    },
    optimization: {
        minimizer: [new TerserPlugin({}), new OptimizeCssAssetsPlugin({})],
    },
    module:{
        rules:[            
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }        
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),    
        new HtmlWebpackPlugin({
            template: './src/client/views/index.html',
            filename: 'index.html'
        }),    
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new WorkboxPlugin.GenerateSW()
    ]
})