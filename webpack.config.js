const webpack = require('webpack')

const env = process.env.NODE_ENV

const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(env),
  }),
]

module.exports = {
  entry: './src/index',
  plugins,
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'source-map',
}
