// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const plugin = require('@tailwindcss/forms');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './public/index.html', // Your index.html file
    }),
  ],
  mode: 'production',
  
  devServer: {
    static: path.join(__dirname, 'public'),
    compress: true,
    port: 3000
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
