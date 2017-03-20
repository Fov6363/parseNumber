/**
 * Created by yuanyuan on 17/3/20.
 */
const parseNumber = require('./lib/parseNumber');

const util = {};

util.parseIntDefault = parseNumber.parseIntDefault;
util.parseFloatDefault = parseNumber.parseFloatDefault;
util.parseIntForce = parseNumber.parseIntForce;
util.parseFloatForce = parseNumber.parseFloatForce;



module.exports = util;