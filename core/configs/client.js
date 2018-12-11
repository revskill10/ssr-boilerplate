const path = require('path');
const webpack = require('webpack')
module.exports = mode => {
  const entry = mode === 'development' ? {
    index: [
      "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000",
      path.resolve(__dirname, '..', 'client.js'),
    ]
  } : path.resolve(__dirname, '..', 'client.js')
  const plugins = mode === 'development' ? [new webpack.HotModuleReplacementPlugin()] : []
  return {
    mode, 
    entry,
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
    },
    plugins,
  }
}
