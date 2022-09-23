const path = require('path');
const cleanPlugin = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  target: 'node',
  mode: 'development',
  watch: true,
  entry: './src/main.ts',
  stats: 'minimal',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [new cleanPlugin.CleanWebpackPlugin(), new Dotenv({ path: './.env.development' })],
};
