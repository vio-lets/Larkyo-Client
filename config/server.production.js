var path = require('path')
var express = require('express')
var app = express()

const srcDir = path.resolve('src');
const outDir = path.resolve('dist');

app.set('port', (process.env.PORT || 8000));

app.use(express.static(outDir))

app.get('*', function (req, res) {
  res.sendFile(outDir+'/index.html')
})

app.listen(app.get('port'), function (err) {
  if (err) {
    console.log(err)
  }
  console.info('==> Listening on port %s.', app.get('port'));
})
