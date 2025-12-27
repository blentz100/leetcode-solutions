// Add Strings
// https://leetcode.com/problems/add-strings/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let i = num1.length -1
    let j = num2.length -1
    let carry = 0
    let runningTotal = "";
    let workingTotal = 0;

    for(let i = num1.length -1, j = num2.length -1; i >= 0 || j >= 0 || carry > 0; i--, j-- ){        
        workingTotal = (((num1[i] || '0').charCodeAt() - 48) + ((num2[j] || '0').charCodeAt() - 48)) + carry
        carry = 0;
        if(workingTotal > 9){
            carry = 1;
            runningTotal = runningTotal.concat((workingTotal - 10).toString())
        }
        else{
            runningTotal = runningTotal.concat(workingTotal.toString())
        }
    }
    
    return runningTotal.split("").reverse().join("");
    
};
