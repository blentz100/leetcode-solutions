/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let originalNums = [...nums];
    let sortedArr = nums.sort(function(a, b){return a-b});
    console.log('sortedArr is:', sortedArr)
    for(let i = 0; i < sortedArr.length; i++){
        for(let j = 1; j < sortedArr.length; j++){
            console.log('sortedArr[i]:', sortedArr[i], 'sortedArr[j]:', sortedArr[j])
            if(sortedArr[i] + sortedArr[j] == target && i !== j){
              console.log('i is:', i, 'j is:', j)
              return [originalNums.indexOf(sortedArr[i]),originalNums.indexOf(sortedArr[j])]
            }
        }
    }
}


console.log(twoSum([3,3], 6))
