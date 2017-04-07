/**
 * Created by yuanyuan on 17/3/20.
 */
const mocha       = require('mocha');
const assert      = require('assert');
const numberUtil = require('../index');

describe('parseIntDefault',function () {
    it('should get right number',function (done) {
        let num1 = 50;
        let num2 = '50';
        let num3 = 'ab';
        let num4 = {"id":123};
        let num5 = null;

        let default_value_1 = 10;
        let default_value_2 = null;

        assert.equal(numberUtil.parseIntDefault(num1,default_value_1),50);
        assert.equal(numberUtil.parseIntDefault(num2,default_value_1),50);
        assert.equal(numberUtil.parseIntDefault(num3,default_value_1),default_value_1);
        assert.equal(numberUtil.parseIntDefault(num4,default_value_1),default_value_1);
        assert.equal(numberUtil.parseIntDefault(num5,default_value_1),default_value_1);
        assert.equal(numberUtil.parseIntDefault(num3,default_value_2),0);
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

        assert.equal(numberUtil.parseFloatDefault(num1,default_value_1),50.87);
        assert.equal(numberUtil.parseFloatDefault(num2,default_value_1),50.87);
        assert.equal(numberUtil.parseFloatDefault(num3,default_value_1),default_value_1);
        assert.equal(numberUtil.parseFloatDefault(num4,default_value_1),default_value_1);
        assert.equal(numberUtil.parseFloatDefault(num5,default_value_1),86);
        assert.equal(numberUtil.parseFloatDefault(num6,default_value_2),0);
        assert.equal(numberUtil.parseFloatDefault(num3,default_value_2),0);
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

        assert.equal(numberUtil.parseIntForce(num1),50);
        assert.equal(numberUtil.parseIntForce(num2),50);
        assert.throws(function () {
            numberUtil.parseIntForce(num3)
        },function (err) {
            if(err instanceof Error && /parseIntForce/.test(err.message)){
                return true;
            }

            return false;
        });

        assert.throws(function () {
            numberUtil.parseIntForce(num4)
        },function (err) {
            if(err instanceof Error && /parseIntForce/.test(err.message)){
                return true;
            }

            return false;
        });
        assert.throws(function () {
            numberUtil.parseIntForce(num5)
        },function (err) {
            if(err instanceof Error && /parseIntForce/.test(err.message)){
                return true;
            }

            return false;
        });

        assert.throws(function () {
            numberUtil.parseIntForce(num5,'error_1')
        },function (err) {
            if(err instanceof Error && 'error_1' === err.message){
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

        assert.equal(numberUtil.parseFloatForce(num1),50.12);
        assert.equal(numberUtil.parseFloatForce(num2),50.12);
        assert.equal(numberUtil.parseFloatForce(num6),87);

        assert.throws(function () {
            numberUtil.parseFloatForce(num3)
        },function (err) {
            if(err instanceof Error && /parseFloatForce/.test(err.message)){
                return true;
            }

            return false;
        });

        assert.throws(function () {
            numberUtil.parseFloatForce(num4)
        },function (err) {
            if(err instanceof Error && /parseFloatForce/.test(err.message)){
                return true;
            }

            return false;
        });
        assert.throws(function () {
            numberUtil.parseFloatForce(num5)
        },function (err) {
            if(err instanceof Error && /parseFloatForce/.test(err.message)){
                return true;
            }

            return false;
        });

        done();
    });
});

describe('isNumber',function () {
    it('should judeg is number',function (done) {
        let num1 = 50.12;
        let num2 = '50.12';
        let num3 = 'ab';
        let num4 = {"id":123};
        let num5 = null;
        let num6 = '87.00';
        let num7 = "";
        let num8 = undefined;
        let num9 = NaN;
        let num10 = [1];

        assert.equal(numberUtil.isNumber(num1),true);
        assert.equal(numberUtil.isNumber(num2),true);
        assert.equal(numberUtil.isNumber(num6),true);
        assert.equal(numberUtil.isNumber(num3),false);
        assert.equal(numberUtil.isNumber(num4),false);
        assert.equal(numberUtil.isNumber(num5),false);
        assert.equal(numberUtil.isNumber(num7),false);
        assert.equal(numberUtil.isNumber(num8),false);
        assert.equal(numberUtil.isNumber(num9),false);
        assert.equal(numberUtil.isNumber(num10),false);

        done();
    });
});