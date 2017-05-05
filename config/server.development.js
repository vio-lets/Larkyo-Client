var express = require('express')
var path = require('path')
var webpack = require('webpack')
var config = require('./webpack.config.development')
var app = express()
var compiler = webpack(config)

const srcDir = path.resolve('src');
const outDir = path.resolve('dist');

var middleware = require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  contentBase: 'src',
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
});

app.use(middleware);
app.use(require('webpack-hot-middleware')(compiler, {
  log: console.log
}));

app.get('*', function response(req, res) {
  res.write(middleware.fileSystem.readFileSync(outDir+ '/index.html'));
  res.end();
});
app.use(express.static(outDir))

app.listen(config._hotPort, 'localhost', function (err) {
  if (err) {
    console.log(err)
  }
  console.info('==> Listening on port %s. Open up http://localhost:%s/ in your browser.', config._hotPort, config._hotPort)
})
