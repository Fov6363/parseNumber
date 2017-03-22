/**
 * Created by yuanyuan on 17/3/22.
 */
const mocha       = require('mocha');
const assert      = require('assert');
const jsonUtil    = require('../index');

describe('jsonUtil',function () {
    it('should check isNotJson',function (done) {
        let json1 = 50;
        let json2 = "50";
        let json3 = null;
        let json4 = undefined;
        let json5 = true;
        let json6 = Symbol("abc");
        let json7 = new String("ewwd3");
        let json8 = {"a":1};
        let json9 = function () {

        }();
        let json10 = [11,12];
        let json11 = '{"abc":123}';
        let json12 = "adsfadf";

        assert.equal(jsonUtil.isJson(json8),true);
        assert.equal(jsonUtil.isJson(json11),true);

        assert.equal(jsonUtil.isJson(json1),false);
        assert.equal(jsonUtil.isJson(json2),false);
        assert.equal(jsonUtil.isJson(json3),false);
        assert.equal(jsonUtil.isJson(json4),false);
        assert.equal(jsonUtil.isJson(json5),false);
        assert.equal(jsonUtil.isJson(json6),false);
        assert.equal(jsonUtil.isJson(json7),false);
        assert.equal(jsonUtil.isJson(json9),false);
        assert.equal(jsonUtil.isJson(json10),false);
        assert.equal(jsonUtil.isJson(json12),false);

        done();
    });
});