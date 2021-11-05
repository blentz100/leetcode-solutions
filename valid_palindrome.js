// https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(incomingTestString) {
    
    let placeHolderString = "";

    // 1. convert everything to lowercase
    placeHolderString = incomingTestString.toLowerCase();
    
    
    // 2. we'll need weed out all non-alphanumeric characters
    
    let newString = "";
    for(let i = 0; i < placeHolderString.length; i++){
        let char = placeHolderString[i].charCodeAt();
        
       if ( char >= 48 && char <= 57 || char >= 97 && char <= 122 ){
           newString += placeHolderString[i];
       }
        
    }
    
    // 3. test to see if the string is the same forward and backward
    let newArray = newString.split("");
    
    let testArray = newArray;
    
    
    if (testArray.toString() === newArray.reverse().toString()){
        //had some trouble getting this if statement working
        //it turns out i was comparing objects, but need to compare strings
        
        //console.log("newArray is: " + typeof newArray + newArray);
        //console.log("newArray.reverse() is : " + typeof newArray.reverse() + newArray.reverse());
        
        return true;
    }
    else{
        return false;
    }
    console.log("newString: " + newString)
    
};







