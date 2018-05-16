module.exports = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: './src',
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
