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



/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
   nums = [1, ...nums, 1];
   const n = nums.length;

   const dp = new Array(n).fill(0).map(()=> {
    return new Array(n).fill(0);
   });

   for(let i =n-1;i>=0;i--){
    for(let j = i+1;j<n;j++){
        let max = -Infinity;
        for(let k = i+1;k< j;k++){
            let maxC = nums[i] * nums[j] * nums[k] + dp[i][k] + dp[k][j];
            max = Math.max(max, maxC)
        }
        dp[i][j] = max == -Infinity ?0 : max;
    }
   }
   return dp[0][n-1];
};
