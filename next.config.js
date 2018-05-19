const withSass = require('@zeit/next-sass');
const config = require('./conf/conf.js');

module.exports = withSass({
  cssModules: true,
  publicRuntimeConfig: config
});
