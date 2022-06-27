//https://leetcode.com/problems/two-sum/submissions/

//Runtime: 92 ms, faster than 74.87% of JavaScript online submissions for Two Sum.
//Memory Usage: 45.2 MB, less than 7.85% of JavaScript online submissions for Two Sum.

//Read the framework for this solution on LC, then broke it down, then redid
//withouth look at the solution

var twoSum = function(nums, target) {
  //create a new map object
  let myMap = new Map();
  
  //iterate over the map object
  
  
  for(let i = 0; i < nums.length; i++){  
    //use the has method to see if the current number has a match
    if(myMap.has(target - nums[i])){
      console.log('target - nums[i]', (target - nums[i]))
      return[i, nums.indexOf(target-nums[i])]
    }
    //if not, add that number to the map for future testing for matches
    else{
      myMap.set(nums[i])
    }
  }
  
}

console.log(twoSum([3,3],6))
