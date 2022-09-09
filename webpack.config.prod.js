const path = require('path');
const cleanPlugin = require('clean-webpack-plugin');

module.exports = {
  target: "node",
  mode: "production",
  entry: './src/main.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new cleanPlugin.CleanWebpackPlugin()
  ]
};