const path = require('path')

module.exports = {
  entry: './src/index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            'react',
            [
              'env', {
                targets: {
                  browsers: ['last 2 versions', 'safari >= 7']
                }
              }
            ]
          ],
          plugins: ['transform-object-rest-spread']
        }
      }
    },
    {
      test: /\.css$/,
      include: path.resolve(__dirname, './src'),
      loaders: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[path]_[name]_[local]_[hash:base64:5]'
          }
        }
      ]
    }]
  }
};
