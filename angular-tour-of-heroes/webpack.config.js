const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
entry: {
  main: './src/index.js'
},
mode: "development",
output: {
  path: path.resolve(__dirname, 'dist'),
  filename: '[name].js',
  publicPath: '/'
},
devServer: {
  host: '0.0.0.0',
  port: 3000,
  contentBase: './dist'
},
watch: true,
watchOptions: {
aggregateTimeout: 1000,
poll: 5000,
ignored: '/node_modules/'
},
module: {
  rules: [
    {
      test: /\.ts$/,
      loaders: ['awesome-typescript-loader', 'angular2-template-loader?keepUrl=true'],
      exclude: [/\.(spec|e2e)\.ts$/]
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    },
    {
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, "css-loader"]
    },
    {
      test: /\.html$/,
      use: [
        {
          loader: "html-loader",
          options: { minimize: true }
        }
      ]
    }
   ]
 },
 plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
