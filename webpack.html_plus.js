var config = require('./webpack.config.js')

config.entry = {
  'html_plus': './html_plus/index.js',
}

config.output = {
  filename: './dist/[name].js',
  library: 'html_plus',
  libraryTarget: 'umd'
}


module.exports = config
