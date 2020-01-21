const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: { 
    path: path.resolve(__dirname, '.', 'dist'),
    filename: 'index-bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/, 
        use: 'babel-loader' 
      },
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html" 
    })
  ],
  devServer: {
    contentBase: "./dist",
    hot: true,
  }
};