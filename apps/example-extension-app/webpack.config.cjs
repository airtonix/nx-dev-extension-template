const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');
const HTMLWebpackPlugin = require('html-webpack-plugin');

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact(), (config) => {
  /**
   * The Newtab HTML
   */
  config.plugins.push(
    new HTMLWebpackPlugin({
      title: 'Newtab',
      filename: 'newtab.html',
      template: 'src/App/NewTab/index.html',
      chunks: ['newtab'],
    })
  );

  /**
   * The Options HTML
   */
  config.plugins.push(
    new HTMLWebpackPlugin({
      title: 'Options',
      filename: 'options.html',
      template: 'src/App/Options/index.html',
      chunks: ['options'],
    })
  );

  /**
   * The Popup HTML
   */
  config.plugins.push(
    new HTMLWebpackPlugin({
      title: 'Popup',
      filename: 'popup.html',
      template: 'src/App/Popup/index.html',
      chunks: ['popup'],
    })
  );

  return config;
});
