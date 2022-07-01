
//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// in progress, almost there!

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let currentBest = 0;
  //let pricesCopy = [...prices]
  for(let i = 0; i < prices.length; i++){
    console.log('prices[' +  i + '] is : ' + prices[i])
    let currentMax = Math.max(...prices.slice(i))
    console.log('currentMax is:' , currentMax)
    if(currentMax - prices[i] > currentBest){
      currentBest =  currentMax - prices[i];
    }
      console.log('currentBest is:', currentBest, '\n')
   
  }
  return currentBest
};

maxProfit([7,1,5,3,6,4])
