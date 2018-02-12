

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
// Env variables
const env = process.env.NODE_ENV === 'production' ? 'production' : 'devd';
const port = process.env.PORT || 3000;

const resolve = { alias: {
}};

if (env === 'production') {
  // Change vendors for mins
  // resolve = {
  //   alias: {
  //     react: 'react/dist/react.min.js',
  //     normalizr: 'normalizr/dist/normalizr.min.js',
  //     'react-dom': 'react-dom/dist/react-dom.min.js',
  //     redux: 'redux/dist/redux.min.js',
  //     'redux-form': 'redux-form/dist/redux-form.min.js'
  //   }
  // };
}

const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css"
});


module.exports = {
  devServer: {
    port: 3000,
    historyApiFallback: true
  },
  entry: {
    // Vendor content
    vendor: ['axios', 'lodash', 'lodash.merge', 'lodash.isplainobject', 'normalizr', 'react', 'react-dom', 'react-intl', 'react-router', 'redux', 'react-redux', 'redux-thunk', 'react-intl-redux'],
    // Source entry point
    bundle: ['./src/js/index.js']
  },
  // Destination directory
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].[hash].js"
  },
  // External config (will not be bundled)
  externals: {
    './src/conf/conf': 'Config'
  },
  devtool: "source-map", // any "source-map"-like devtool is possible
  module: {
    rules: [
      // JS Files to translate with babel
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      // SASS files
      {
        test: /\.scss$/,
        use: extractSass.extract({
          // use style-loader in development
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                modules: true,
                camelCase: true,
                sourceMap: true
              }
            }, {
              loader: "sass-loader"
            }
          ]
          })
        },
        // Images
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
        },
        // Fonts
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            'file-loader'
          ]
        }
      ]
    },
    plugins: [
      extractSass,
      new HtmlWebpackPlugin({
        template: 'src/public/index.html',
        favicon: 'src/public/favicon.ico'
      })
    ]
  };
