/*https://leetcode.com/problems/valid-parentheses/

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
*/ 




/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
let stack = []
let matches = {
    "{" : "}",
    "(" : ")",
    "[" : "]"
  }

  console.log(matches["{"])
  for(let i = 0; i < s.length; i++){
    if(s[i] == "(" || s[i] == "{" || s[i] == "["){
      stack.push(s[i])
      console.log('stack is:', stack)
    }
    else if (matches[`${stack.pop()}`] !== s[i]){
      return false;
    }
  }
  if(stack.length == 0){
    return true;
  }
  return false;
};

console.log(isValid("()[{}"));
