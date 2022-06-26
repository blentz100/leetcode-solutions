/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    for(let i = 0; i < nums.length; i++){
      if(nums.indexOf(target - nums[i]) !== -1 ){
        console.log(nums.indexOf(target - nums[i]))
        return [nums.indexOf(nums[i]),nums.indexOf(target - nums[i])];
      }
    }
}


console.log(twoSum([3,3], 6))
