var config = require('./webpack.config.js')

config.entry = {
  'src': './src/index.js',
}

config.output = {
  filename: './dist/[name].js',
  library: 'src',
  libraryTarget: 'umd'
}


module.exports = config
