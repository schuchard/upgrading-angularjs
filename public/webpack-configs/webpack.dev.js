module.exports = {
  devtool: 'source-map',
  devServer: {
    contentBase: './',
    port: 9000,
    proxy: {
      '/api': 'localhost:9001',
    },
  },
  module: {
    rules: [
      { test: /\.css?$/, use: ['style-loader', 'css-loader'] },
      { test: /\.scss?$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
    ],
  },
};
