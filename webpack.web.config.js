module.exports = {
  entry: './src/api.js',
  output: {
      path: __dirname,
      filename: './lib/neon-web.js',
      libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: [require('babel-plugin-transform-object-rest-spread')]
          }
        }
      }
    ]
  },
}
