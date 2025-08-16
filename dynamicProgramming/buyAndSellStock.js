/** link : https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let min= prices[0];
    for(let i =1;i<prices.length;i++){
        let profit = prices[i]- min;
        maxProfit = Math.max(maxProfit, profit);
        min = Math.min(min, prices[i])
    }
    return maxProfit;
};
