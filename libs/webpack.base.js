const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootDir = path.resolve(__dirname, '../');

module.exports = [{
  name: 'client',
  output: {
    path: path.resolve(rootDir, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: [{
        loader: 'babel-loader'
      }],
    }, {
      test: /\.(png|gif|jpg|svg)$/,
      use: [{
        loader: 'file-loader',
        options: { name: '[hash]-[name].[ext]' },
      }],
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}, {
  name: 'client-App for server-side rendering',
  entry: [
    './src/client/App.jsx',
  ],
  output: {
    filename: 'App.js',
    path: path.resolve('./build/client'),
    publicPath: '/',
    libraryTarget: 'commonjs2',
  },
  externals: /^[a-z\-0-9]+$/,
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: [{
        loader: 'babel-loader',
      }],
    }],
  },
}, {
  name: 'client-reducer for server-side rendering',
  entry: [
    './src/client/reducer.js',
  ],
  output: {
    filename: 'reducer.js',
    path: path.resolve('./build/client'),
    publicPath: '/',
    libraryTarget: 'commonjs2',
  },
  externals: /^[a-z\-0-9]+$/,
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: [{
        loader: 'babel-loader',
      }],
    }],
  },
}];