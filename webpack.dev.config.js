var path = require('path');
var webpack = require('webpack');
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var env = process.env.WEBPACK_BUILD || 'development';

var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');  // Updated import
var webpackDevConfig = require('./webpack.base.config')('development');
var webpackProdConfig = require('./webpack.base.config')('production');

var paths = [
  '/',
  '/components/',
  '/components/validators/',
  '/components/checkboxes/',
  '/components/avform/',
  '/404.html',
];

var basepath = env === 'production' ? process.env.BASEPATH || '/availity-reactstrap-validation/' : '/';

var config = [{
  devtool: 'source-map',
  devServer: {
    contentBase: './build',
    stats: {
      chunks: false,
    },
  },
  entry: {
    main: './docs/lib/app.js',
  },
  node: {
    fs: 'empty',
  },
  output: {
    filename: 'bundle.js',
    publicPath: basepath,
    path: './build',
    libraryTarget: 'umd',
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new CopyWebpackPlugin([{ from: './docs/static', to: 'assets' }]),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new StaticSiteGeneratorPlugin('main', paths, { basename: basepath }),
    new webpack.NoErrorsPlugin(),
    new MiniCssExtractPlugin({ filename: 'assets/style.css' }),  // Updated plugin
  ],
  module: {
    rules: [
      {
        test: /\.(json)$/,
        use: [
          'json-loader?cacheDirectory',
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader?cacheDirectory',
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,  // Use MiniCssExtractPlugin loader
          'css-loader',  // Use css-loader
        ],
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    alias: {
      'bootstrap-css': path.join(__dirname, 'node_modules/bootstrap/dist/css/bootstrap.css'),
      'availity-reactstrap-validation': path.resolve('./src'),
    },
  },
}];

if (env === 'development') {
  config.push(webpackDevConfig);
  config.push(webpackProdConfig);
} else {
  config[0].plugins.push(new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    compress: {
      warnings: false,
    },
    mangle: true,
  }));
}

module.exports = config;
