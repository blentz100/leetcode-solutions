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
