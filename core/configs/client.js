const path = require('path');
module.exports = {
  entry: path.resolve(__dirname, '..', 'client.js'),
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    publicPath: '/dist/',
    filename: 'client.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, '..', 'client'),
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      components: path.resolve(__dirname, '..', '..', 'components')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
