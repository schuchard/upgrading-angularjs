const path = require('path');

module.exports = {
  mode: 'development',
  entry: './app.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },
  module: {
    rules: [{ test: /\.ts?$/, use: 'ts-loader', exclude: '/node_modules/' }],
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
};
