function validateIpSection(s){
    if(isNaN(+s)) return false
    if(!s.match(/^([1-9]\d*|0)$/)) return false
    if(+s < 0 || s > 255) return false
    return true
}
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s,currentResult = [],results= []) {
    if(s.length ===0){
        if(currentResult?.length === 4 
        && validateIpSection(currentResult[0])
        && validateIpSection(currentResult[1])
        && validateIpSection(currentResult[2])
        && validateIpSection(currentResult[3])
        ){
            results.push(currentResult.join('.'))
        }
    }else{
        for(let i =0 ;i<s.length;i++){
            const section = s.slice(0,i+1)
            const left = s.slice(i+1)
            restoreIpAddresses(left,[...currentResult,section],results)
        }
    }
    return results
};