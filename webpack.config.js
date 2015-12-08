var webpack = require('webpack')

module.exports = {
    cache: true,
    entry: {
      app: './src/index.js',
    },
    output: {
      path: './dist/',
      publicPath: '/dist/',
      filename: 'bundle.js'
    },
    plugins: [
      new webpack.ProvidePlugin({
        riot: 'riot'
      })
    ],
    module: {
      preLoaders: [
        { test: /\.tag$/, exclude: /node_modules/, loader: 'riotjs-loader', query: { type: 'es6' } }
      ],
      loaders: [
        { test: /\.js|\.tag$/, exclude: /node_modules/, include: /src/, loader: 'babel-loader', query: {modules: 'common'} },
        { test: /\.css$/, include: /src/, loader: 'style!css' }
      ]
    },
    devServer: {
      port: 5555
    },
    devtool: 'source-maps'
}
