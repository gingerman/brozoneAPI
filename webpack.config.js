const path = require('path');

module.exports = {
  entry: './bin/index.js',
  mode: 'production',
  target: 'node',
  output: {
    path: path.resolve(__dirname, '.'),
    filename: 'server.bundle.js'
  }
};