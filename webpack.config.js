const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './app/app.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: '/public/',
        filename: 'bundle.js'
    },
    devtool: 'inline',
    plugins: [
        new MiniCssExtractPlugin({
            filename: "bundle.css",
        })
    ],
    module: {
        rules: [
            {
                test: /\.tag$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'riot-tag-loader',
                    options: {
                        hot: true,
                        type: 'es6'
                    }
                }]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    }
};