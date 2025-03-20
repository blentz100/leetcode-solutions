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


// Runtime: 1ms Beats 95.72%, O(n)
// Memory: 63.28 MB, beats 20.10%

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
  let l = 0;
  let r = height.length - 1
  let result = 0;

  while( l < r){
    // compute the area at each iteration
    result = Math.max(result, (Math.min(height[l], height[r]) * (r - l)))
    if( height[l] < height [r]){
      l++
    }
    else{
      r--
    }
  }
  return result
}
