const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({ template: 'index.html' });

module.exports = {
  devtool: 'source-map',
  
  entry: ["./src/app.js"],

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/, //Não vai ler os node_modules
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [HTMLWebpackPluginConfig],
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true
  }
};

/*
if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vuejs.github.io/vue-loader/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ])
}
*/