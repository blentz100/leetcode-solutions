//https://leetcode.com/problems/concatenation-of-array/submissions/
//concatenate 2 arrays

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let ans = []
    for (let i = 0; i < nums.length; i++){
        let k = nums[i];
        ans[i] = k;
        ans[i + nums.length] = k;
    }
    return ans;
};
