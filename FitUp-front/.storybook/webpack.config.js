const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css?$/,
        loaders: [ 'style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' ],
        exclude: /node_modules/
      },
      {
        test: /\.css?$/,
        loaders: [ 'style-loader', 'css-loader' ],
        include: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: [ 'style', 'css-loader', 'sass-loader' ],
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
        loader: 'file?limit=30000&name=./fonts/[name]-[hash].[ext]'
      }
    ]
  }
}
