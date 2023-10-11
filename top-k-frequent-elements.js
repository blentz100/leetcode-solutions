//https://leetcode.com/problems/top-k-frequent-elements/submissions/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const myMap = new Map();

    nums.forEach((num) => {
        if(!myMap.has(num)) {
            myMap.set(num, 1);  
        }
        else {
            myMap.set(num,myMap.get(num)+1)
        }
    })

    const solutionMap = new Map([...myMap.entries()].sort((a, b) => b[1] - a[1]));

    const answerArr = []
    solutionMap.forEach((value,key) => {
      if(k > 0){
        answerArr.push(key)
        k--
      }
    })
    return answerArr
};
