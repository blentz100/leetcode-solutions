//Group Anagrams
//https://leetcode.com/problems/group-anagrams

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    //Take strs, sort the individual phrases, then create and object with key value pairs
    //Then sort that whole thing
    //Then iterate through that, each time there is a change, create a new subarray

    const answerArray = [];
    const sortedArray = strs.map(item => {
        const myObject = {
            mutated: '',
            original: ''
        }
        myObject.original = item
        myObject.mutated = item.split("").sort().join("");
        return myObject
    })

    const newArray = sortedArray.sort((a, b) => {
        const nameA = a.mutated
        const nameB = b.mutated
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        // names must be equal
        return 0;
    })

    for(let index = 0; index < newArray.length; index++){
        const subArray = [];
        subArray.push(newArray[index].original)
        while((index < newArray.length -1) && newArray[index].mutated === newArray[index+1].mutated){
            subArray.push(newArray[index +1].original)
            index++
        }
        answerArray.push(subArray);
    }
    return answerArray;
}
    




