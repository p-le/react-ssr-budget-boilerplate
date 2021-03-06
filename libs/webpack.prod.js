const webpack = require('webpack');
const merge = require('webpack-merge');

const baseConfig = require('./webpack-base-config.js');
const rootDir = path.resolve(__dirname, '../');

module.exports = baseConfig.map(config => merge(config, {
  entry: {
    app: [ './src/client/index.js' ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true,
      },
      compress: {
        screw_ie8: true,
      },
      comments: false,
    }),
  ],
}));