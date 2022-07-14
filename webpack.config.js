const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    'js/main': './index.js',
    'admin/js/main': './admin.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  devServer: {
    hot: true,
    static: {
      directory: './dist',
      watch: true
    }
  }
};
