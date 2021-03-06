const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtract = require('mini-css-extract-plugin');
const basePath = __dirname;
const distPath = 'dist';
const indextInput = './src/index.html';
const indexOutput = 'index.html';
const webpackInitConfig = {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.ts']
  },
  entry: {
    app: ['@babel/polyfill', './src/index.ts']
  },
  output: {
    path: path.join(basePath, distPath),
    filename: '[chunkhash][name].js'
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
          // 'eslint-loader' Fix the indentation from the .js files created by .ts files
        ]
      },
      {
        test: /\.ts/,
        exclude: /node_modules/,
        use: ['ts-loader']
      },
      {
        test: /\.css/,
        exclude: /node_modules/,
        use: [
          MiniCSSExtract.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: indexOutput,
      template: indextInput
    }),
    new MiniCSSExtract({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
};
module.exports = webpackInitConfig;
