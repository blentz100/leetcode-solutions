/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let currentTotal = 0;
    let maxTotal = 0;
    if (nums.length == 1){
        return nums[0]
    }
    for(let i = 0; i <= nums.length -k; i++){
        currentAvg = 0;
        if(i == 0){
            currentTotal = nums.slice(i, i+ k).reduce((prev,current) => prev + current );
        }
        else{
            currentTotal = currentTotal - nums[i-1] + nums[i-1+k]
        }
        if(currentTotal > maxTotal | maxTotal == 0){
            maxTotal = currentTotal
        }
    }
    return maxTotal / k
};
