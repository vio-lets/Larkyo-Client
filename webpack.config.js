var isProd = process.env.NODE_ENV === 'production'
    , webpack = require('webpack')
    , path = require('path')
    , autoprefixer = require('autoprefixer')
    , csswring = require('csswring')
    , mqpacker = require('css-mqpacker')
    , values = require('postcss-modules-values')
    , postcss_nested = require('postcss-nested')
    , postcss_color = require('postcss-color-function')
    , package = require('./package.json')

var ExtractTextPlugin = require('extract-text-webpack-plugin')
    , HtmlWebpackPlugin = require('html-webpack-plugin')

var cssLoaders = 'style!css?modules'
function extract(loaders) {
    return ExtractTextPlugin.extract({fallback:'style', use:[
        values, postcss_nested, postcss_color, autoprefixer, mqpacker, csswring
    ]})
}

// basic configuration:
const title = 'Larkyo';
const baseUrl = '/';
const rootDir = path.resolve();
const srcDir = path.resolve('src');
const outDir = path.resolve('dist');
const ENV = process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase() || 'development';

var entry = isProd ? {
    app: srcDir + "/index.jsx",
    vendors: ['react', 'react-router'] //, 'lodash']
} : {
    app: [
        'webpack-dev-server/client?http://0.0.0.0:8080',
        'webpack/hot/only-dev-server',
        srcDir+'/index.jsx'
    ]
}


let config;


let baseConfig = {
    devtool: 'eval',
    entry: entry,
    output: {
        path: outDir,
        filename: isProd ? '[name].[chunkhash].js' : 'app.js'
        , chunkFilename: isProd ? '[chunkhash].js' : '[id].js'
    },
    module: {
        loaders: [
            {test: /\.json$/, loader: 'json-loader'},
            {test: /\.js$/, exclude: /(node_modules)/, loader: 'babel-loader', query: {presets: ['es2017', 'react']}},
            {test: /\.jsx?$/, loaders: (isProd ? [] : []).concat(['babel-loader']), exclude: /node_modules/},
            {test: /\.css$/, loader: isProd ? extract(cssLoaders) : cssLoaders},
            {test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader?modules'},
            {test: /\.png$/, loader: "url?limit=100000&mimetype=image/png"},
            {test: /\.svg$/, loader: "url?limit=100000&mimetype=image/svg+xml"},
            {test: /\.gif$/, loader: "url?limit=100000&mimetype=image/gif"},
            {test: /\.jpg$/, loader: "file"}
        ]
    },
    plugins: isProd ? [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
        new webpack.optimize.CommonsChunkPlugin({name:'vendors', filename:'[name].[hash].js'}),
        new ExtractTextPlugin('[name].[hash].css'),
        new HtmlWebpackPlugin({
            title: package.name,
            template: srcDir+'/index.html',
            production: isProd
        })
    ] : [
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            title: package.name,
            template: srcDir+'/index.html'
        })
    ],
    resolve: {
            extensions: ['*', '.js', '.json', '.jsx', '.css','.scss']
        }
}

config = baseConfig
module.exports = config;