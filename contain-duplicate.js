//https://leetcode.com/problems/contains-duplicate/submissions/
/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
  */ 

/**
 * @param {number[]} nums
 * @return {boolean}
 */

const myNums = [1,2,3,1]
var containsDuplicate = function(nums) {
    nums.sort(function(a, b){return a - b});
    for(let i = 0; i < nums.length - 1; i++){
        if(nums[i] == nums[i+1]){
            return true;
        }
    }
    return false;
};


console.log(containsDuplicate(myNums))

// 3/21/25
// 15ms beats 45.74%
// 72.67 beats 5.24%

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const myMap = new Map();
    for (let num of nums){
      if(myMap.has(num)){
        return true
      }
      else{
        myMap.set(num)
      }
    }
    return false
};


