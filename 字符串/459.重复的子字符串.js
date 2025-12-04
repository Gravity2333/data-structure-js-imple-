/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    const doubleS = s+s
    const subDoubleS = doubleS.slice(1,-1)
    return subDoubleS.includes(s)
};