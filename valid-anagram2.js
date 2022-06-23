/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

  //if lengths don't match, it can't be an anagram
  if(s.length !== t.length){
    return false;
  }

  //if they do match, we need to compare all letters
  let myHashMap = {}

  //iterate through the first word and create the Hashamp
  for(let letter of s){
    console.log(letter)
    myHashMap[letter] = (0 | myHashMap[letter]) + 1
    console.log(myHashMap)
  }

  //iterate through the second word and start deducting the count of the hashmap until we can't deduct or we reach the end
  for(let letterTwo of t){
    console.log(letterTwo)
    if(myHashMap[letterTwo] == 0){
      return false
    }
    myHashMap[letterTwo]--;
    console.log(myHashMap)
  }
  

  return true;
};

console.log(isAnagram('anagramZ', 'nagaramq'))

