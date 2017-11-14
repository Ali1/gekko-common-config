var merge = require('./config-mergefunction');
var config = require('./config-common.js');

// Want Gekko to perform real trades on buy or sell advice?
// Enabling this will activate trades for the market being
// watched by `config.watch`.
config.trader = {
  enabled: true,
  key: '***',
  secret: '***',
  username: '***', // your username, only required for specific exchanges.
  passphrase: '' // GDAX, requires a passphrase.
}
config.watch = {

  // see https://gekko.wizb.it/docs/introduction/supported_exchanges.html
  exchange: 'bitstamp',
  currency: 'USD',
  asset: 'BTC',

  // You can set your own tickrate (refresh rate).
  // If you don't set it, the defaults are 2 sec for
  // okcoin and 20 sec for all other exchanges.
  // tickrate: 20
}
config.pushbullet.tag = '[G] BTC';
config.mailer.tag = '[G] BTC ';
module.exports = config;
