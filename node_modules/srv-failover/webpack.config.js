module.exports = {
  entry: './src/index.js',
  devtool: '#source-map',
  output: {
    library: 'SrvFailover',
    libraryTarget: 'commonjs2',
    filename: 'index-webpack.js'
  },
  module: {
    rules: [
      {
        test: /\.coffee$/,
        use: [ 'coffee-loader' ]
      }
    ]
  }
}
