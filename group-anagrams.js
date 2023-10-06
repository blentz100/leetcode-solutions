//Group Anagrams


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    const sortedStrs = strs.map(item => item.split("").sort().join(""))

    const mySet = new Set(sortedStrs);

    const solutionArray =[];
    mySet.forEach(item => {
        const tempArray = []
        strs.forEach(subItem => {
            if(item === subItem.split("").sort().join("")){
                tempArray.push(subItem)
            }
            console.log('inner loop')
        })
        console.log('outer loop')
        solutionArray.push(tempArray)
    })
   return solutionArray
   


}
    
