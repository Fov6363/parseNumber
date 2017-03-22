/**
 * Created by yuanyuan on 17/3/20.
 */
const numberUtil = require('./lib/numberUtil');
const jsonUtil    = require('./lib/jsonUtil');

const util = {};

util.parseIntDefault    = numberUtil.parseIntDefault;
util.parseFloatDefault  = numberUtil.parseFloatDefault;
util.parseIntForce      = numberUtil.parseIntForce;
util.parseFloatForce    = numberUtil.parseFloatForce;
util.isNumber           = numberUtil.isNumber;

util.isJson = jsonUtil.isJson;

module.exports = util;