const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './app.ts',
  output: {
    path: path.resolve(__dirname, '../../', 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.ts?$/, use: 'ts-loader', exclude: '/node_modules/' },
      { test: /\.css?$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000',
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: 'file-loader',
      },
      {
        test: /\.html?$/,
        use: 'raw-loader'
      }
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
};
