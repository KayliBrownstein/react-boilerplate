let path = require('path')

module.exports = {
  entry: {
    path: './src/main.js'
  },
  output: {
    path: path.resolve('./build'),
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './build'
  }
}
