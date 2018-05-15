const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  output: {
    filename: '[name].[hash].js'
  },
  plugins: [
    new UglifyJsPlugin({
      cache: true,
      parallel: 4,
      uglifyOptions: { ecma: 5 },
    }),
  ],
};
