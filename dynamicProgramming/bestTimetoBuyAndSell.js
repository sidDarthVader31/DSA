/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let hold = -Infinity; // max profit if holding stock
    let cash = 0;          // max profit if not holding stock

for (let price of prices) {
    let prevCash = cash;
    cash = Math.max(cash, hold + price); // sell today
    hold = Math.max(hold, prevCash - price); // buy today
}

return cash;
};


/**
 * memoization + recursion approach
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // [7,1,5,3,6,4]
    const n = prices.length
    const dp  = new Array(n).fill(0).map(()=>{
        return new Array(2).fill(undefined)
    });
    const f = (i, j) => {
        //f(i,j) -> max profile on prices[i..n-1] when bought on j 

        //base case 
        if(i== n)return 0;

        if(dp[i][j+1]!= undefined) return dp[i][j+1];

        
        //buy condition 
        if(j ==-1){
            //i can only buy or ignore
            let buy = -prices[i] + f(i+1, 1);
            let ignore = f(i+1, j);
            return dp[i][j+1] = Math.max(buy, ignore);
        }
        else {
            let sell = prices[i] + f(i+1, -1);
            let ignore = f(i+1, j);
            return dp[i][j+1] = Math.max(sell, ignore)
        }
    }
    return f(0,-1)
};



/**
 *  tabulation approach
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // [7,1,5,3,6,4]
    const n = prices.length
    const dp  = new Array(n+1).fill(0).map(()=> {
        return new Array(2).fill(0);
    });
    for(let i = n-1;i>=0;i--){
        dp[i][0] = Math.max(
            -prices[i] + dp[i+1][1],
            dp[i+1][0]
        );
        dp[i][1] = Math.max(
            prices[i] + dp[i+1][0],
            dp[i+1][1]
        );
    }
    return dp[0][0]
};
