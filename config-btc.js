var merge = require('./config-mergefunction');
var config = require('./config-common.js');
var exchanges = require('./config-common-exchanges.js');

var exchange = 'poloniex';
var currency = 'USDT';
var asset = 'STR';

// Want Gekko to perform real trades on buy or sell advice?
// Enabling this will activate trades for the market being
// watched by `config.watch`.
config.trader = exchanges[exchange];
config.trader.enabled = true;

config.watch = {
  // see https://gekko.wizb.it/docs/introduction/supported_exchanges.html
  exchange: exchanges[exchange].name,
  currency: currency,
  asset: asset,

  // You can set your own tickrate (refresh rate).
  // If you don't set it, the defaults are 2 sec for
  // okcoin and 20 sec for all other exchanges.
  // tickrate: 20
}
config.pushbullet.tag = `[${asset}/${currency} ${exchange}] `;
config.mailer.tag = config.pushbullet.tag;
module.exports = config;
