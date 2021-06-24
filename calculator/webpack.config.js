const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  experiments: {
    outputModule: true,
  },
  output: {
    library: {
      type: 'module'
    },
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
};
