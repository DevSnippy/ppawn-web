const webpack = require("webpack");

module.exports = function override(config, env) {
  // Add os-browserify polyfill
  config.resolve.fallback = {
    ...config.resolve.fallback,
    os: require.resolve("os-browserify/browser"),
  };

  return config;
};
