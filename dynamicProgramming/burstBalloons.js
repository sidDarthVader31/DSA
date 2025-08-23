/**
 * link : https://leetcode.com/problems/burst-balloons/
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
   nums = [1, ...nums, 1];
   const n = nums.length;

   const dp = new Array(n).fill(0).map(()=> {
    return new Array(n).fill(undefined);
   });

   const f = (i,j) => {
    //f(i,j) - returns max coins by bursting balloons between i and j 

    if(j == i+1) return 0;
    if(dp[i][j]!= undefined) return dp[i][j];

    let maxCost = -Infinity;
    for(let k=i+1;k<j;k++){
        let maxC = f(i,k) + f(k,j) + nums[i] * nums[j] * nums[k];
        maxCost = Math.max(maxCost, maxC)
    } 
    return dp[i][j] = maxCost;
   }
   return f(0, n-1);
};
