"use strict";

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

// basic configuration:
const title = 'Larkyo';
const baseUrl = '/';
const rootDir = path.resolve();
const srcDir = path.resolve('src');
const outDir = path.resolve('dist');
const ENV = process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase() || 'development';
let config;

let baseConfig = {
    entry: srcDir + "/index.js",
    output: {
        path: outDir,
        filename: "bundle.js",
    },
    devServer: {
        contentBase: "./dist",
        historyApiFallback: true,
        inline: true
    }
};
//modules configuration
let modules = {
    loaders: [
        {test: /\.json$/, loader: 'json-loader'},
        {test: /\.js$/, exclude: /(node_modules)/, loader: 'babel-loader', query: {presets: ['es2017', 'react']}},
        {test: /\.css$/, loader: 'style-loader!css-loader!autoprefixer-loader?modules'},
        {test: /\.scss$/, loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader?modules'}
    ]
}

//plugins configuration
let plugins = [
    new HtmlWebpackPlugin({
        template: srcDir + "/index.html"
    })
]

// advanced configuration:
switch (ENV) {
    case 'production':
        baseConfig.output = {
            publicPath: "http://localhost",
            path: outDir,
            filename: "bundle.js"
        }
        baseConfig.devServer.port = 80
        baseConfig.devServer.host = 'localhost' //TODO make prod working at http://domain
        break;
    case 'test':
        config = baseConfig;
        baseConfig.output = {
            path: outDir,
            filename: "bundle.js",
        }
        break;
    case 'development':
    default:
        process.env.NODE_ENV = 'development';
        baseConfig.output = {
            path: outDir,
            filename: "bundle.js",
        }
        //baseConfig.devServer.port = 3000 //change dev mode port
        break
}

baseConfig.module = modules;
baseConfig.plugins = plugins;
config = baseConfig
module.exports = config;