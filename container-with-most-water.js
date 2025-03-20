// https://leetcode.com/problems/container-with-most-water/description/


//Brute Force Method (times out on larger inputs)


var maxArea = function(height) {
  let result = 0;
    
  for(let i = 0; i < height.length - 1; i++){
    for(let j = i + 1; j < height.length; j++){
      //console.log('i is: ', i, ' j is: ', j)
      result = Math.max(result, (Math.min(height[i], height[j]) * (j - i)))
    }
  }
  return result
};
