const path = require('path');

module.exports = {
  mode: 'development',
  entry: './app.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
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
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './',
    port: 9000,
  },
};
