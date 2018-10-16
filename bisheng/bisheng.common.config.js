const assign = require('object-assign');
const process = require('process');
const webpack = require('webpack');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  lazyLoad: false,
  plugins: [
    'bisheng-plugin-react?lang=__react',
    'bisheng-plugin-uxcore',
  ],

  webpackConfig(config) {
    const newConfig = assign({}, config);
    const cmd = process.argv[1];
    if (/bisheng\-start$/.test(cmd)) {
      newConfig.plugins.push(
        new webpack.DefinePlugin({
          __theme__webpack__placeholder__: 'isDev = true',
        }),
      );
      // newConfig.plugins.push(
      //   new BundleAnalyzerPlugin(),
      // );
    } else {
      newConfig.plugins.push(
        new webpack.DefinePlugin({
          __theme__webpack__placeholder__: 'isDev = false',
        }),
      );
    }
    newConfig.externals = {
      react: 'var React',
      'react-dom': 'var ReactDOM',
      'react/lib/ReactCSSTransitionGroup': 'var React.addons.CSSTransitionGroup',
      'salt-ui': 'var SaltUI',
    };
    return newConfig;
  },

};
