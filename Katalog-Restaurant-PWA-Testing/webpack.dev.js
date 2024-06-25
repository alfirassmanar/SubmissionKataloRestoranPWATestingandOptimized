const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');
const path = require('path');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const common = require('./webpack.common');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const SplitWebpackPlugin = require('split-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    open: true,
    port: 8080,
    client: {
      overlay: {
        errors: true,
        warnings: true,
      },
    },
    compress: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ImageminWebpackPlugin({
      plugins: [
        ImageminMozjpeg({
          quality: 50,
          progressive: true,
        }),
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: 'dist/stats.json',
          openAnalyzer: false,
        }),
        new SplitWebpackPlugin({
          name: 'vendor',
          minChunks: Infinity
        })
      ],
    }),
    new ImageminWebpWebpackPlugin({
      config: [
        {
          test: /\.(jpe?g|png)/,
          options: {
            quality: 40,
          },
        },
      ],
      overrideExtension: true,
    }),
  ],
});