class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices) {
    let leftWindow = 0;
    let rightWindow = 1;
    let bestProfit = 0;
    let profit = 0;

    while (rightWindow < prices.length) {
      profit = prices[rightWindow] - prices[leftWindow];
      if (profit > bestProfit) bestProfit = profit;
      if (profit < 0) {
        leftWindow = rightWindow;
      } else {
        rightWindow++;
      }
    }
    return bestProfit;
  }
}

const solution = new Solution();
const entry = [5, 1, 5, 6, 7, 1, 10];
const result = solution.maxProfit(entry);
console.log(result);
