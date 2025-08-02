
link: https://leetcode.com/problems/min-cost-climbing-stairs/
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const n = cost.length;
    let min = new Array(n+1).fill(undefined);

    min[0]= cost[0];
    min[1]= cost[1]
    for(let i =2;i<=n;i++){
        min[i]= (cost[i]||0)+Math.min(min[i-1], min[i-2]);
    }
    return min[n];
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
}:w

