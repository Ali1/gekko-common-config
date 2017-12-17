var merge = require('./config-mergefunction');
var config = require('./config-common.js');
var exchanges = require('./config-common-exchanges.js');

for (let j = 0; j < process.argv.length; j++) {  
    console.log(j + ' -> ' + (process.argv[j]));
}

var exchange = process.argv[4];
var currency = process.argv[5];
var asset = process.argv[6];
var method = process.argv[7];
var amountAvailable = process.argv[8]

// Want Gekko to perform real trades on buy or sell advice?
// Enabling this will activate trades for the market being
// watched by `config.watch`.
config.trader = exchanges[exchange];
config.trader.enabled = true;
if (amountAvailable) {
  config.trader.currencyAmountAvailableToTrade = parseInt(amountAvailable);
}

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
