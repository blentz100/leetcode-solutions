//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/


// 12/11/2025
// 1ms beats 96%
/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
    let left = 0;
    let right = 1;
    let workingProfit = 0;
    let profit = 0;
    
    while (right < prices.length){
    
       // Profitable Transaction
       if(prices[left] < prices[right]){
        // calculate profit
        workingProfit = prices[right] - prices[left]
       }
       // Advance left
       else {
        left = right;
       }
       // Always advance the right
       right++
    
        if(workingProfit > profit){
            profit = workingProfit;
        }
    }
    return profit
};









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
  console.log(prices)
  for(let i = 0; rightPointer < prices.length ; i++){
    //first thing - calculate the profit based on the current positions 
    currentProfit = prices[rightPointer] - prices[leftPointer];
    //next, decide if this profit is better than what we already have
    if(maxProfit < currentProfit){
      maxProfit = currentProfit
    }
    //print out the current state of affairs 
    console.log('loop:', i, 'left:', prices[leftPointer], ' right:', 
                 prices[rightPointer], ' currentProfit:', currentProfit,
                 'maxProfit is: ', maxProfit) 
    //now the algorithm goes here
    
    //if right is less than left, r++, l++
    if(prices[rightPointer] < prices[leftPointer]){
      leftPointer=rightPointer;
      rightPointer++;
    }
    //else keep advancing right by itself
    else{
      rightPointer++;
    }
  }
  
  return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4]));
