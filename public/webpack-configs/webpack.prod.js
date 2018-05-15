const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  plugins: [
    new UglifyJsPlugin({
      cache: true,
      parallel: 4,
      uglifyOptions: { ecma: 5 },
    }),
  ],
};
