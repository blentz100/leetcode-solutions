//https://leetcode.com/problems/valid-palindrome/submissions/

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
