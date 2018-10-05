const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const port = process.env.PORT || 3000;

const distPath = path.join(__dirname, 'dist');
const confPath = path.join(__dirname, 'conf');
const assetsPath = path.join(__dirname, '../dev/assets');

module.exports = (params) => {
  return merge(common(params), {
    devServer: {
      port: port,
      historyApiFallback: true,
      contentBase: path.resolve(distPath)
    },
    devtool: 'inline-source-map',
    plugins: [
      new CopyWebpackPlugin([{
        from: path.resolve(path.join(confPath, 'conf.js')),
        to: path.resolve(path.join(distPath, 'conf'))
      }, { 
        from: path.resolve(path.join(assetsPath)),
        to: path.resolve(path.join(distPath, 'assets'))
      }])
    ]
  });
};
