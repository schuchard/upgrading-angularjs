const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack-configs/webpack.common');

module.exports = (env) => {
  console.log(`\nrunning ${env.env} environment\n`);
  const envConfig = require(`./webpack-configs/webpack.${env.env}.js`);

  return webpackMerge(commonConfig, envConfig);
};
