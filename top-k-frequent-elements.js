//https://leetcode.com/problems/top-k-frequent-elements/submissions/

// 12/10/2025
// Based this one of the Python Solution from Neetcode
// This relies on the bucket sort algorithm to use the indices
// to represent the frequencies of each number
// Runtime 5ms Beats 96.97% of other submissions
// Memory 58MB Beats 73% of other submissions

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function(nums, k) {
    
    //Step 1: Create a Map with Frequency of each num
    const numbersMap = new Map();
    nums.forEach(num => {
        numbersMap.set(num, (numbersMap.get(num) || 0) + 1)
    })

    //Step 2: Convert Map to Array with BucketSort
    //The indices are now the frequencies
    const numbersArray = []
    for(const [key,value] of numbersMap){
        numbersArray[value] = (numbersArray[value] || new Set()).add(key)
    }

    //Step 3: create the answser by going through the array backwards
    const answerArr = []
    for(let i = numbersArray.length -1; i >= 0; i--){
        if(numbersArray[i]) answerArr.push(...numbersArray[i])
        if(answerArr.length === k){
            return answerArr;
        }
    }    
};

// This older solution was probably me just guessing at it until I came up with something that worked. 

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
