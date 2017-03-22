/**
 * Created by yuanyuan on 17/3/22.
 */
module.exports = function () {

    function isJson(json) {

        let type = typeof json;

        //ignore symbol type
        if(type === 'number' || type === 'undefined' || type === 'boolean' || type === 'function' || type === 'symbol'){
            return false;
        }

        if(json === null){
            return false;
        }

        if(Array.isArray(json)){
            return false;
        }

        //string | json Object


        if(type === 'object'){
            if(json.constructor === {}.constructor){
                return true;
            }

            return false;
        }

        if(type === 'string'){
            let local_value = json;

            if(!isNaN(local_value)){
                return false;
            }

            try{
                JSON.parse(local_value);

                return true;
            }catch (e){
                return false;
            }
        }

        //unknown type
        return false;
    }

    return {isJson};
}();