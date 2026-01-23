// Memory: 10.1 MB
// •
// Time: 0.024s
// •
// Submitted at: 01/23/2026 10:04
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];

        for(let i = 0; i < s.length; i++){
           // Push any opening symbols onto the stack
            if(s[i].match(/[\[{(]/)){
                stack.push(s[i])
            }
            
            else{
                switch(s[i]){
                    case ']':
                        if (stack.at('-1') === '['){
                            stack.pop()
                        }
                        else return false;
                        break;
                    case '}':
                        if (stack.at('-1') === '{'){
                            stack.pop()
                        }
                       else return false;
                       break;
                    case ')':
                        if (stack.at('-1') === '('){
                            stack.pop()
                        }
                        else return false;
                        break;
                }
            }
        }
        return stack.length === 0 ? true : false
    }
}




/*https://leetcode.com/problems/valid-parentheses/

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
*/ 



// 12/10/2025 Solution:
var isValid = function(s) {
    // If I see a closing symbol, it has to match the most recent opening symbol
    const openList = []
    const symbolArray = s.split("");

    for(let i = 0; i < symbolArray.length; i++) {
        console.log('openList is: ', openList)
        if(symbolArray[i] === '(' || symbolArray[i] === '{' || symbolArray[i] === '['){
            openList.push(symbolArray[i])
        }
        else{ 
            switch (symbolArray[i]){
                case '}':
                    if(openList.pop() !== '{') {
                        return false
                    }
                    break;
                case ')':
                    if(openList.pop() !== '(') {
                        return false
                    }
                    break;
                case ']':
                    if(openList.pop() !== '['){
                        return false
                    } 
                    break;
                default:
                    break;
            }
        }
    }
    if(openList.length === 0) return true;
    else return false;







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
