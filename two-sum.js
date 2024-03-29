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
