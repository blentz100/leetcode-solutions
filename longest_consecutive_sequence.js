// This solution works in Neetcode
// But fails on a very large input in leetcode

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
        let numsSet = new Set(nums)
        
        let result = 0

        for(const num of nums){
            let curr = num;
            let streak = 0;
            while(numsSet.has(curr)){
                streak++
                curr++
            }
            result = Math.max(streak, result)
        }

        return result; 
}
