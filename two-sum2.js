// Neetcode 
// Memory: 52.3 MB
// Time: 0.933s
// Submitted at: 01/13/2026 09:33
class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // Use a left and right pointer
        // Iterate through the input. If current sum is greater than the target
        // then move the right pointer, else move the left pointer.
        let i = 0
        let j = numbers.length - 1
        let currentSum
        while(i < j){
            currentSum = numbers[i] + numbers[j]
            if(currentSum == target) return [i+1, j+1]
            if(currentSum > target) j--
            else i++
        }
    }
}



// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*
Runtime: 277 ms, faster than 8.69% of JavaScript online submissions for Two Sum.
Memory Usage: 42.7 MB, less than 43.99% of JavaScript online submissions for Two Sum.
*/

var twoSum = function(nums, target) {
//loop through all nums, and subtract the current num from target, and check if that result is present
//somewhere else in nums using indexOf

    for(let i = 0; i < nums.length; i++){
      if((nums.indexOf(target - nums[i]) !== -1) && (nums.indexOf(target - nums[i]) !== i) ){
        //special case where both numbers are the same number
        if(nums[i] === (target - nums[i])){
          return [nums.indexOf(nums[i]),nums.indexOf(target - nums[i],i)];
        }
        //the rest of the cases
        else{
          return [nums.indexOf(nums[i]),nums.indexOf(target - nums[i],i + 1)];
        }
        
      }
    }
}

console.log(twoSum([3,3], 6));

/*
Runtime 2ms, beats 62.13%
Memory 50.25 MB, beats 41.66%
*
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {

let left = 0;
let right = numbers.length -1;

while(numbers[left] + numbers[right] !== target){
  let currSum = numbers[left] + numbers[right];
  if(currSum < target) {
    left++
  }
  else {
    right--
  }
}
  return [left +1, right +1]    
};


/*
Runtime: 1ms, faster than 88.32% of JavaScript online submissions for Two Sum.
Memory Usage: 55.60 MB, less than 31.57% of JavaScript online submissions for Two Sum.
*/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    let currSum;
    
    for (let i = 0 ; i <= numbers.length; i++){
        currSum = numbers[left] + numbers[right]
        if ( currSum == target){
            return[left + 1, right + 1]
        }
        else if (currSum < target){
            left++
        }
        else {
            right--
        }
    }   
};
