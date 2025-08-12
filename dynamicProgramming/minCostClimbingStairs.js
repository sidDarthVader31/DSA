
link: https://leetcode.com/problems/min-cost-climbing-stairs/
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const n = cost.length;
    let min = new Array(n+1).fill(undefined);
    let first = min[0];
    let second = min[1];
    for(let i =2;i<=n;i++){
      let temp = second;
      second = (cost[i]||0) + Math.min(first, second)
      first = second;
    }
    return second;
};




/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairsMemoization = function(cost) {
    const n = cost.length;
    let min = new Array(n+1).fill(undefined);
    return dp(cost, min, n)
};

const dp = (cost, min, n) => {
    if(n==0){
        return cost[0];
    }
    if(n==1) return cost[1];
    if(min[n]!= undefined){
        return min[n];
    }
    return min[n]= (cost[n]||0) + Math.min(dp(cost,min,n-1), dp(cost, min,n-2))
}


/**
    link:https://leetcode.com/problems/decode-ways/
    space optimized tabulation
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const n = s.length;
    let second = 1; 
    let first = s[n-1] =='0'?0:1
    for(let i = n-2;i>=0;i--){
        let current = 0;
        if(s[i]!='0'){
            current= first;
            const num = Number(`${s[i]}${s[i+1]}`);
            if(num>=10 && num<=26){
                current = current+ second;
                }
            }
            second = first;
            first = current;
            
    }
   return first;
};
