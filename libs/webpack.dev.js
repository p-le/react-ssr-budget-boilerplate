const webpack = require('webpack');
const path = require('')
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.js');
const rootDir = path.resolve(__dirname, '../');

module.exports = baseConfig.map(config => merge.smartStrategy({
  plugins: 'prepend',
})(config, {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      'webpack/hot/only-dev-server',
      './src/client/index.js'
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
}));