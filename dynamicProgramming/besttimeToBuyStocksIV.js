/**
 * link :https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
      const n = prices.length;
    const dp = new Array(n+1).fill(0).map(()=>{ // i
        return new Array(2).fill(0).map(()=>{ //choices - buy or sell
            return new Array(k+1).fill(0)
        });
    });

    for(let i = n-1;i>=0;i--){
        for(let j=0;j<k;j++){
            dp[i][0][j] = Math.max(
                -prices[i]+dp[i+1][1][j],//buying
                dp[i+1][0][j]//ignore
            )
            dp[i][1][j] = Math.max(
                prices[i] + dp[i+1][0][j+1],//selling
                dp[i+1][1][j]//ignore
            )
        }
    }
    return dp[0][0][0]
};
