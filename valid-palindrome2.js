/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    //convert it to lower case
    //strip out all the non letters or numbers

    let cleanS = s.toLowerCase().replace(/\W/g, '')
    
    //one for loop where you compare letters from both ends and move inwards.
    //if no match, return false
    //if you get all the way throug the for loop, then return true
    
  
    console.log(cleanS)

    return 9999
};

console.log(isPalindrome("A m3an, a plan, a canal: Panama"))
