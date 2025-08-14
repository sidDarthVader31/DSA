/**
 * link: https://leetcode.com/problems/coin-change/
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const n = coins.length;
    const dp = new Map();
    const f = (i, total) => {
        //f(i, total) -> min no of coins required to achieve total out of 0..i index coins 

        //base cases 
        if(total == 0) return 0;
        if(i<0) return Infinity;

        const key = `${i}-${total}`
        if(dp.has(key)) return dp.get(key);
        let min = Infinity;

        if(coins[i]<=total) {
            //take coin 
            min = Math.min(
                min, 
                f(i, total-coins[i]) +1
            )
        }
        min = Math.min(min, f(i-1, total))
        dp.set(key,min)
        return min;
    }
    const num = f(n-1, amount);
    return num == Infinity ?-1 : num;
};



/**
 * tabulation for coin change
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity)
    dp[0] =0;

    for(let i=1;i<=amount;i++){
        for(const coin of coins){
            if(i>= coin){
                dp[i] = Math.min(dp[i], dp[i-coin]+1)
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
};
