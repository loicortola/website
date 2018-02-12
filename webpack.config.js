
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');

const webpack = require('webpack');

const path = require('path');
// Env variables
const env = process.env.NODE_ENV === 'production' ? 'production' : 'devd';
const port = process.env.PORT || 3000;

const sourcePath = path.join(__dirname, 'src');
const staticSourcePath = path.join(__dirname, 'static');

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

module.exports = {
  devServer: {
    port: 3000,
    historyApiFallback: true
  },
  entry: {
    app: path.resolve(sourcePath, path.join('js','index.js'))
  },
  // Destination directory
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].[chunkhash].js"
  },
  // External config (will not be bundled)
  externals: {
    [path.resolve(sourcePath, path.join('conf','conf'))]: 'Config'
  },
  devtool: "source-map", // any "source-map"-like devtool is possible
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ],
        include: sourcePath
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { minimize: true } },
            'sass-loader'
          ]
        })
      },
      {
        test: /\.(eot?.+|svg?.+|ttf?.+|otf?.+|woff?.+|woff2?.+)$/,
        use: 'file-loader?name=assets/[name]-[hash].[ext]'
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        use: [
          'url-loader?limit=20480&name=assets/[name]-[hash].[ext]'
        ],
        include: staticSourcePath
      }
    ]
  },
  plugins: [
    // Scope Hoisting
    new webpack.optimize.ModuleConcatenationPlugin(),
    // Separate vendor content from our js code
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.[chunkhash].js',
      minChunks (module) {
        return module.context && module.context.indexOf('node_modules') >= 0;
      }
    }),
    // Uglify
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true
      },
      output: {
        comments: false
      }
    }),
    // Hashed module ids instead of names. Prod only
    new webpack.HashedModuleIdsPlugin(),
    // Extract SASS files into CSS file
    new ExtractTextPlugin({
      filename: "[name].[chunkhash].css"
    }),
    // Minify CSS
    new StyleExtHtmlWebpackPlugin({
      minify: true
    }),
    // Copy html files and resources to destination, minify
    new HtmlWebpackPlugin({
      template: path.resolve(staticSourcePath, 'index.html'),
      favicon: path.resolve(staticSourcePath, 'favicon.ico'),
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true
      }
    }),

  ]
};
