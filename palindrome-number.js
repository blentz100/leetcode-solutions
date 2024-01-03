// https://leetcode.com/problems/palindrome-number

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
