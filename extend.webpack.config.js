const { GuessPlugin } = require('guess-webpack');
const { parseRoutes } = require('guess-parser');

const credentials = require('./credentials.json');
const viewId = '267572061';

module.exports = {
  plugins: [
    new GuessPlugin({
      debug: true,
      jwt: credentials,
      GA: viewId,

      runtime: {
        delegate: false
      },
      routeProvider() {
        return parseRoutes('.');
      }
    })
  ]
};
