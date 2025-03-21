/* https://leetcode.com/problems/valid-anagram/ 242. Valid Anagram Easy

5243

221

Add to List

Share Given two strings s and t, return true if t is an anagram of s, and false
otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different
word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram" Output: true Example 2:

Input: s = "rat", t = "car" Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104 s and t consist of lowercase English
letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt
your solution to such a case?
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    console.log(s.split("").sort().join(""))
    console.log(t.split("").sort().join(""))
    
    if(s.split("").sort().join("") === t.split("").sort().join("")){
        return true;
    }
    else return false;
    
};


// 3/21/25
// 23ms beats 35.82%
// 57.81 beats 30.21%

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    return s.split("").sort().join("") === t.split("").sort().join("")   
};

