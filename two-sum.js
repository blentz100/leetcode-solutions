//https://leetcode.com/problems/two-sum/submissions/

var twoSum = function(nums, target) {
  
  //create a new map object
  let myMap = new Map();
  
  //iterate over the map object
  for(let i = 0; i < nums.length; i++){  
    //use the has method to see if the current number has a match
    let complement = target - nums[i]
    if(myMap.has(complement)){
      console.log({complement})
      return[i, nums.indexOf(complement)]
    }
    //if not, add that number to the map for future testing for matches
    myMap.set(nums[i])
  }
}

twoSum([3,3],6)

// Another solution:

function twoSum(nums, target) {
  const answer = []
  for(let i = 0; i < nums.length; i++){
    if(nums.toSpliced(i,1).indexOf(target - nums[i]) >= 0){
      answer.push(i, nums.toSpliced(i,1).indexOf(target - nums[i])+ 1)
      return answer
    }
  }
}

// Another solution:
// Runtime 39ms beats 45.29%
// Memory 49.56MB beats 82.6%

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
      let complement = target - nums[i]
      for(let j = i + 1 ; j < nums.length; j++){
        if(nums[j] == complement){
          return [i,j]
        }
      }
    }
};
