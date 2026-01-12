// Neetcode
// Memory: 52.6 MB Time: 0.817s Submitted at: 01/12/2026 16:55
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleanString = s.replaceAll(/[^a-zA-Z0-9]+/g, "").toLowerCase();
        let i = 0
        let j = cleanString.length - 1
        while( i < j) {
            if(cleanString[i] !== cleanString[j]) return false
            i++
            j--
        }
        return true
    }
}


//https://leetcode.com/problems/valid-palindrome/submissions/

// 3/18/2025
// Runtime is 1ms, beats 98.23%
// Memory is 54.98MB, beats 56.93%

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // remove all non alphanumeric characters first
    const t = s.replaceAll(/[^a-zA-Z0-9]+/g, "").toLowerCase();
    for(let left = 0, right = t.length -1; left <= right ; left++, right--){
        if(t[left] !== t[right]){
          return false
        }
    }
    return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))




// 6/27/2022
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    let lowerS = s.toLowerCase();
    //remove all non letters or numbers
    //compare the results forward and backward to see if it matches
    let cleanString = "";
    for(let i = 0; i < lowerS.length; i++){
        if( (lowerS[i].charCodeAt() >= 97 && lowerS[i].charCodeAt() <= 122) ||
            (lowerS[i].charCodeAt() >= 48 && lowerS[i].charCodeAt() <= 57 )){
            cleanString += lowerS[i];
        }
    }
    let palArr = cleanString.split("");
    let revPalArr = [...palArr];
    revPalArr.reverse();
 
    for(let j = 0; j < palArr.length; j++){
        
      if(palArr[j] !== revPalArr[j]){
          return false;
      }
    }
    return true; 
};

console.log(isPalindrome("0P"))
