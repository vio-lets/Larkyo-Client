const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'public');
const SRC_DIR = path.resolve(__dirname, 'src');

const config = {
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
        publicPath: "/scripts/",
        contentBase: "./public",
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
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally

        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates
    ]
};

module.exports = config;