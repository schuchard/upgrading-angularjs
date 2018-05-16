const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack-configs/webpack.common');

module.exports = (env) => {
  if (!env || !env.env) {
    env.env = 'dev';
  }

  console.log(`\nrunning ${env.env} environment\n`);
  const envConfig = require(`./webpack-configs/webpack.${env.env}.js`);

  // console.log('envConfig ->', JSON.stringify(envConfig, null,2));

  return webpackMerge.smart(commonConfig, envConfig);
};
