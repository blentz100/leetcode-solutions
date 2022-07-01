
//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// in progress, almost there!

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let currentProfit = 0;
  let leftPointer = 0;
  let rightPointer = 1;
  let maxProfit = 0;
  //let pricesCopy = [...prices]
  for(let i = 0; i < prices.length - 1; i++){
    currentProfit = prices[rightPointer] - prices[leftPointer];
    if(maxProfit < currentProfit){
      maxProfit = currentProfit 
    }
    console.log('buy:', prices[leftPointer], ' sell:', 
                 prices[rightPointer], ' currentProfit:', currentProfit,
                 'maxProfit is: ', maxProfit) 
    
    if(prices[rightPointer] < prices[leftPointer]){
      rightPointer++;
      leftPointer++;
    }
    else{
      rightPointer++;
    }
  }
  
  return maxProfit;
};

console.log(maxProfit([2,1,2,1,0,1,2]));
