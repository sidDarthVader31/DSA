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


/**
 * memoization + recursion
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
      const n = prices.length;
    const dp = new Array(n+1).fill(0).map(()=>{ // i
        return new Array(2).fill(0).map(()=>{ //choices - buy or sell
            return new Array(k).fill(undefined)
        });
    });

    const f = (i, j, choices) => {
        if(i==n) return 0;

        if(choices == k) return 0;

        if(dp[i][j][choices]!= undefined) return dp[i][j][choices]
        let profit = 0;
        if(j ==0){
            //can buy 
            profit = -prices[i] + f(i+1, 1, choices);
            return dp[i][j][choices] = Math.max(
                profit, 
                f(i+1, j, choices)
            )
        }
        else{
            profit = prices[i] + f(i+1, 0, choices+1);
            return dp[i][j][choices] = Math.max(
                profit,
                f(i+1, j, choices)
            )
        }
    }
    return f(0,0,0)
};
