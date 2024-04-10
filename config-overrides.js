const webpack = require('webpack');

module.exports = function override(config, env) {
  // Fallback configuration
  if (!config.resolve.fallback) { config.resolve.fallback = {}; }
  config.resolve.fallback.crypto = require.resolve('crypto-browserify');
  config.resolve.fallback.buffer = require.resolve('buffer/');
  config.resolve.fallback.stream = require.resolve('stream-browserify');

  // DefinePlugin configuration
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser',
    }),
  ]);

  return config;
};
