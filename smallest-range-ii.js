//https://leetcode.com/problems/smallest-range-ii/
// in progress
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeII = function(nums, k) {
    // sort the array
    
    // possibilites for the endpoints
    // 1. they both increase
    // 2. they both decrese
    // 3. low goes up and high goes down
    // 4. low goes down and high goes up
    // Actually we can rule out 1 and 2 and maybe even 4?
    
    // pick the smallest delta
    
    let newNums = nums.sort();
    console.log (newNums);
    
    let low = newNums[0]
    let high = newNums[newNums.length -1];
    
    let answer = 0; 
    for (let i = 0; i < 4; i++){
        
    }
};
