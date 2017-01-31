let path = require('path')

module.exports = {
  entry: {
    path: './src/main.js'
  },
  output: {
    path: path.resolve('./build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './build'
  }
}
