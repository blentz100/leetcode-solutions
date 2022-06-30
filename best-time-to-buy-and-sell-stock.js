/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let currentBest = 0;
  for(let i = 0; i < prices.length; i++){
    for(let j = i + 1; j < prices.length; j++){
      console.log(`prices[i]: ${prices[i]}, prices[j]: ${prices[j]}, profit is: ${prices[j] - prices[i]}`)
      if (prices[j] - prices[i] > currentBest){
        currentBest = prices[j] - prices[i];
      } 
    }
  }  


  return currentBest
};

console.log(maxProfit([7,6,4,3,1]))
