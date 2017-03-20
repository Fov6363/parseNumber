/**
 * Created by yuanyuan on 17/3/20.
 */
const mocha       = require('mocha');
const assert      = require('assert');
const parseNumber = require('../index');

describe('parseIntDefault',function () {
    it('should get right number',function (done) {
        let num1 = 50;
        let num2 = '50';
        let num3 = 'ab';
        let num4 = {"id":123};
        let num5 = null;

        let default_value_1 = 10;
        let default_value_2 = null;

        assert.equal(parseNumber.parseIntDefault(num1,default_value_1),50);
        assert.equal(parseNumber.parseIntDefault(num2,default_value_1),50);
        assert.equal(parseNumber.parseIntDefault(num3,default_value_1),default_value_1);
        assert.equal(parseNumber.parseIntDefault(num4,default_value_1),default_value_1);
        assert.equal(parseNumber.parseIntDefault(num5,default_value_1),default_value_1);
        assert.equal(parseNumber.parseIntDefault(num3,default_value_2),0);
        done();
    });
});

describe('parseFloatDefault',function () {
    it('should get right number',function (done) {
        let num1 = 50.87;
        let num2 = '50.87';
        let num3 = 'ab';
        let num4 = {"id":123};
        let num5 = 86.00;
        let num6 = null;

        let default_value_1 = 10.1;
        let default_value_2 = null;

        assert.equal(parseNumber.parseFloatDefault(num1,default_value_1),50.87);
        assert.equal(parseNumber.parseFloatDefault(num2,default_value_1),50.87);
        assert.equal(parseNumber.parseFloatDefault(num3,default_value_1),default_value_1);
        assert.equal(parseNumber.parseFloatDefault(num4,default_value_1),default_value_1);
        assert.equal(parseNumber.parseFloatDefault(num5,default_value_1),86);
        assert.equal(parseNumber.parseFloatDefault(num6,default_value_2),0);
        assert.equal(parseNumber.parseFloatDefault(num3,default_value_2),0);
        done();
    });
});

describe('parseIntForce',function () {
    it('should get right number',function (done) {
        let num1 = 50;
        let num2 = '50';
        let num3 = 'ab';
        let num4 = {"id":123};
        let num5 = null;

        assert.equal(parseNumber.parseIntForce(num1),50);
        assert.equal(parseNumber.parseIntForce(num2),50);
        assert.throws(function () {
            parseNumber.parseIntForce(num3)
        },function (err) {
            if(err instanceof Error && /parseIntForce/.test(err.message)){
                return true;
            }

            return false;
        });

        assert.throws(function () {
            parseNumber.parseIntForce(num4)
        },function (err) {
            if(err instanceof Error && /parseIntForce/.test(err.message)){
                return true;
            }

            return false;
        });
        assert.throws(function () {
            parseNumber.parseIntForce(num5)
        },function (err) {
            if(err instanceof Error && /parseIntForce/.test(err.message)){
                return true;
            }

            return false;
        });

        done();
    });
});

describe('parseFloatForce',function () {
    it('should get right number',function (done) {
        let num1 = 50.12;
        let num2 = '50.12';
        let num3 = 'ab';
        let num4 = {"id":123};
        let num5 = null;
        let num6 = '87.00';

        assert.equal(parseNumber.parseFloatForce(num1),50.12);
        assert.equal(parseNumber.parseFloatForce(num2),50.12);
        assert.equal(parseNumber.parseFloatForce(num6),87);

        assert.throws(function () {
            parseNumber.parseFloatForce(num3)
        },function (err) {
            if(err instanceof Error && /parseFloatForce/.test(err.message)){
                return true;
            }

            return false;
        });

        assert.throws(function () {
            parseNumber.parseFloatForce(num4)
        },function (err) {
            if(err instanceof Error && /parseFloatForce/.test(err.message)){
                return true;
            }

            return false;
        });
        assert.throws(function () {
            parseNumber.parseFloatForce(num5)
        },function (err) {
            if(err instanceof Error && /parseFloatForce/.test(err.message)){
                return true;
            }

            return false;
        });

        done();
    });
});