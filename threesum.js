// https://leetcode.com/problems/3sum/submissions/1579529082/


// 3/19/25
// 36ms beats 63.70%
// 71.49MB beats 44.63%

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // sort the array
    // double for loop
    // outer for loop, use i as the index, go left to right
    // if nums[i] === [i+1], then increment i again so we avoid duplicates
    // inner for loop, use a left and right pointer just like in 2sum
    

  const sortedNums = nums.sort((a,b) => a - b)
  const solution = []
  let left;
  let right;

  for(let i = 0; i < sortedNums.length; i++){
      if(sortedNums[i] === sortedNums[i - 1] && i > 0) continue;
      left = i + 1;
      right = sortedNums.length - 1

   
    while(left < right){
      const currSum = sortedNums[i] + sortedNums[left] + sortedNums[right]
      
      //check to see if we have a match
      if( currSum === 0){
        solution.push([sortedNums[i], sortedNums[left], sortedNums[right]])

        //if we found a match, there still could be remaining matches in the outer iteration of the loop
        //so we increment left point to keep checking
        left++;;

        // but we also need to make sure the left pointer is not pointing to the same value again
        // otherwise we would have duplicates, so check for that, and advance left point as necessary
        while(sortedNums[left] === sortedNums[left -1] && left < right){
            left++;
        }
      }
      else if (currSum < 0){
        left++
      }
      else if (currSum > 0){
        right--
      }
    }
  }
   return solution 
};
