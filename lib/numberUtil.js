module.exports = function () {
    function parseIntDefault(num,default_value) {
        if(typeof default_value !== 'number') default_value = 0;

        if(typeof num === 'number'){
            return num;
        }

        if(typeof num === 'string'){
            if(num === (parseInt(num) + "")){
                return parseInt(num);
            }else{
                return default_value;
            }
        }

        return default_value;
    }

    function parseFloatDefault(num,default_value) {
        if(typeof default_value !== 'number') default_value = 0;

        if(typeof num === 'number'){
            return num;
        }

        if(typeof num === 'string'){
            if(compar_number_with_string(parseFloat(num),num)){
                return parseFloat(num);
            }else{
                return default_value;
            }
        }

        return default_value;
    }

    function parseIntForce(num) {
        if(typeof num === 'number'){
            return num;
        }

        if(typeof num === 'string'){
            if(num === (parseInt(num) + "")){
                return parseInt(num);
            }else{
                throw new Error(`parseIntForce num fail,num = ${num}`);
            }
        }

        throw new Error(`parseIntForce num fail,num = ${num}`);
    }

    function parseFloatForce(num) {
        if(typeof num === 'number'){
            return num;
        }

        if(typeof num === 'string'){
            if(compar_number_with_string(parseFloat(num),num)){
                return parseFloat(num);
            }else{
                throw new Error(`parseFloatForce num fail,num = ${num}`);
            }
        }

        throw new Error(`parseFloatForce num fail,num = ${num}`);
    }

    function compar_number_with_string(num,num_str) {

        if(typeof num_str !== 'string' || typeof num !== 'number'){
            return false;
        }

        if(num + "" === num_str){
            return true;
        }

        let num_pre = num_str.slice(0,num_str.lastIndexOf('.'));
        let num_suf = num_str.slice(num_str.lastIndexOf('.') + 1,num_str.length);
        if(num_suf.replace(/0/g,'') === '' && num + "" === num_pre){
            return true;
        }

        return false;
    }

    function isNumber(num) {
        // isNaN('') ==> false;
        if(isNaN(num) || isNaN(parseFloat(num))){
            return false;
        }else{
            return true;
        }
    }

    return {parseIntDefault,parseFloatDefault,parseIntForce,parseFloatForce,isNumber};
}();
