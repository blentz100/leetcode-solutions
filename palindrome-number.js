// https://leetcode.com/problems/palindrome-number

// 12/11/2025
// 12ms beats 22%
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let inputStr = x.toString().split("");
    for(let x = 0, y = inputStr.length -1; x <= y; x++, y--){
        if(inputStr[x] !== inputStr[y]) return false
    }
    return true;
};


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let testString = x.toString();

    for(let i=0, j=testString.length -1; i < testString.length; i++, j--){
        if(testString[i] != testString[j]){
            return false
        }
    }
    return true;
    
};
