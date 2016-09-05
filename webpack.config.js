module.exports = {
  entry : './src/scripts/app.client.js',
  output : {
    filename: 'app.js',
    path: 'public'
  },
  module: {
    loaders : [
      {
        test: /\.js$/,
        loader: 'babel',
        include: __dirname + '/src/scripts'
      }
    ]
  }
}
