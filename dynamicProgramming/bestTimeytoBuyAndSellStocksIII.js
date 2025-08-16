/**
 * link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/description/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const n = prices.length;
    const dp = new Array(n).fill(0).map(()=>{ // i
        return new Array(2).fill(0).map(()=>{ //choices - buy or sell
            return new Array(3).fill(undefined)
        });
    });

    const f=(i, buy, choices) => {

        //f(i, buy, choices) -> max profit for i- n-1 

        if(i==n) return 0;

        if(choices==2) return 0;

        if(dp[i][buy][choices]!= undefined) return dp[i][buy][choices];

        let profit  =0;
        if(buy == 0) {
            //buy 
            profit = -prices[i] + f(i+1, 1, choices);
            return dp[i][buy][choices] = Math.max(profit, 
            f(i+1, buy, choices))
        }
        else {
            //sell 
            profit = prices[i]+ f(i+1, 0, choices+1);
            return dp[i][buy][choices] = Math.max(profit, 
            f(i+1, buy, choices))
        }
    }
    return f(0,0,0)
};
