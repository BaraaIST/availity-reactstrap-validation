const path = require('path');
const webpack = require('webpack');

const webpackConfig = {
  target: 'node',
  context: path.join(__dirname, './src'),
  devtool: 'cheap-module-source-map',
  entry: {
    'availity-reactstrap-validation': ['./index.js'],
  },
  node: {
    fs: 'empty',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.json$/,
        type: 'json',  // Webpack 5 supports JSON natively
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      'availity-reactstrap-validation': path.resolve('./src'),
    },
    extensions: ['.js', '.jsx', '.json'],
  },
  externals: {
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
    'react/addons': true,
  },
  output: {
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]',
  },
  webpackServer: {
    noInfo: true,
  },
};

module.exports = webpackConfig;
