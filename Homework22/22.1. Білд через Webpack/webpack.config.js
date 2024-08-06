const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
   entry: './src/js/script.js',
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '',
   },
   mode: 'development',
   module: {
      rules: [
         {
            test: /\.scss$/,
            use: [
               MiniCssExtractPlugin.loader,
               'css-loader',
               'sass-loader',
            ],
         },
         {
            test: /\.css$/,
            use: [
               MiniCssExtractPlugin.loader,
               'css-loader',
            ],
         },
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env'],
               },
            },
         },
      ],
   },
   plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
         filename: 'styles.css',
      }),
      new HtmlWebpackPlugin({
         template: './src/index.html',
         filename: 'index.html',
      }),
   ],
   optimization: {
      minimize: true,
      minimizer: [
         new TerserPlugin(),
         new CssMinimizerPlugin(),
      ],
   },
   devServer: {
      static: path.resolve(__dirname, 'dist'),
      compress: true,
      port: 9000,
      open: true,
   },
};
