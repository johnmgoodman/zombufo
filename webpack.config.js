const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  mode: "development",
  plugins: [
    new CopyWebpackPlugin([
        { from: 'src/vendor' }
    ])
  ]
};