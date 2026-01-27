// Memory: 10.7 MB
// •
// Time: 23ms
// •
// Submitted at: 01/27/2026 11:24

class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = new Array(temperatures.length).fill(0)

       // The key to this problem is to store pairs in the stack.
       // The pair contains the temperatures and it's corresponding index from the original input array
       // We need to keep track of that index somehow, and this is the method. 
        
        const stack = [] // pair: [temp, index]

  
        for(const [index, temp] of temperatures.entries()){
            while (stack.length !== 0 && temp > stack.at(-1)[0]){
                let [stackTemp, stackIndex] = stack.pop()
                result[stackIndex] = index - stackIndex;
            }
            stack.push([temp, index])
        }
        
        return result
    }
}



// Brute Force Solution

// Memory: 13.1 MB
// •
// Time: 71ms
// •
// Submitted at: 01/26/2026 13:53


class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let result = [];

        for(let i = 0; i < temperatures.length; i++){
            for (let j = i+1; j < temperatures.length; j++ ){
                if (temperatures[j] > temperatures[i]){
                    result.push(j - i)
                    break
                }
            }
            if (result[i] === undefined){
                    result[i] = 0
                }
        }
        return result;
    }
}
