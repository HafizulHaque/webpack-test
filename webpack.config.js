module.exports = {
  entry: './src/js/app.js',
  output: {
    path: __dirname+'/dest',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      // {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: {presets: ['es2015']}}
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      }
    ]
  }
}