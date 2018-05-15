module.exports = {
  devtool: 'source-map',
  devServer: {
    contentBase: './',
    port: 9000,
    proxy: {
      '/api': 'localhost:9001',
    },
  },
};
