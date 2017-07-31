const webpack = require('webpack');
const path = require('path');
const dashboardPlugin = require('webpack-dashboard/plugin');

const BUILD_DIR = path.resolve(__dirname, 'public');
const SRC_DIR = path.resolve(__dirname, 'src');

const config = {
    devtool:'source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack/hot/only-dev-server',
        SRC_DIR + '/index.js'
    ],
    output: {
        path: BUILD_DIR + '/scripts',
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        publicPath: '/scripts/',
        contentBase: './public',
        hot: true,
        historyApiFallback: true
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: SRC_DIR,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[local]'
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }
        ]
    },
    plugins: [
        // enable HMR globally
        new webpack.HotModuleReplacementPlugin(),

        // prints more readable module names in the browser console on HMR updates
        new webpack.NamedModulesPlugin(),

        // reduces the size of bundle.js - 23/07/2017 Clyde - only enable for production mode
        // new webpack.optimize.UglifyJsPlugin(),

    ]
};

module.exports = config;