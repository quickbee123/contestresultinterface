const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'node_modules/@tonclient/lib-web/tonclient.wasm' }
      ],
    }),
  ],
};