var path = require('path');
var webpack = require('webpack');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var TerserPlugin = require('terser-webpack-plugin');

var libraryName = 'AvailityReactstrapValidation';

module.exports = function(env) {
  var outputFile;
  var plugins = [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
  ];

  if (env === 'production') {
    // Extract CSS to a separate file in production
    plugins.push(new MiniCssExtractPlugin({
      filename: 'styles.css',  // The output filename for the extracted CSS
    }));

    outputFile = libraryName.toLowerCase() + '.min.js';
  } else {
    outputFile = libraryName.toLowerCase() + '.js';
  }

  var config = {
    devtool: 'source-map',  // Generate source maps
    entry: [path.resolve(__dirname, 'src', 'index.js')],  // Entry point for the app
    output: {
      path: path.resolve(__dirname, 'dist'),  // Output directory for the bundle
      filename: outputFile,
      library: libraryName,
      libraryTarget: 'umd',  // Universal Module Definition for both AMD/CommonJS/ES Modules
      umdNamedDefine: true,
    },
    externals: [
      {
        react: {
          root: 'React',
          commonjs2: 'react',
          commonjs: 'react',
          amd: 'react',
        },
      },
      {
        'react-dom': {
          root: 'ReactDOM',
          commonjs2: 'react-dom',
          commonjs: 'react-dom',
          amd: 'react-dom',
        },
      },
      {
        'react-addons-transition-group': {
          commonjs: 'react-addons-transition-group',
          commonjs2: 'react-addons-transition-group',
          amd: 'react-addons-transition-group',
          root: ['React', 'addons', 'TransitionGroup'],
        },
      },
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,  // Handle JavaScript and JSX files
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],  // Babel presets
              cacheDirectory: true,  // Cache compiled files for faster rebuilds
            },
          },
        },
        {
          test: /\.css$/,  // Handle CSS files
          use: [
            MiniCssExtractPlugin.loader,  // Extract CSS into a separate file
            'css-loader',  // Use CSS loader to process CSS files
          ],
        },
      ],
    },
    resolve: {
      alias: {
        'availity-reactstrap-validation': path.resolve(__dirname, 'src'),
      },
      extensions: ['.js', '.jsx', '.json'],  // File extensions to resolve
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],  // Module resolution order
    },
    plugins: plugins,
    optimization: {
      minimize: true,  // Minify the output
      minimizer: [
        new TerserPlugin({  // Use TerserPlugin for minification in production
          terserOptions: {
            compress: {
              drop_console: true,  // Optionally remove console.log statements
            },
          },
        }),
      ],
    },
  };

  return config;
};
