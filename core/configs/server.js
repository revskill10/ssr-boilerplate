const nodeExternals = require('webpack-node-externals');
const path = require('path');
module.exports = mode => {
  return {
  mode,
  target: 'node',
  externals: [nodeExternals()],
  entry: path.resolve(__dirname, '..', 'server.js'),
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    publicPath: '/dist/',
    filename: 'server.js',
    library: 'app',
    libraryTarget: 'commonjs2'
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
}}
