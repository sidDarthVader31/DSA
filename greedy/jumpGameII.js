/**
 * link : https://leetcode.com/problems/jump-game-ii/description/
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
     let n = nums.length;
     const dp = new Array(n).fill(undefined);

     const f = (i) => {
        if(i>=n-1) return 0;

        if(dp[i]!= undefined) return dp[i];
        let minJump  = Infinity;

        for(let j=1;j<=nums[i];j++){
            minJump = Math.min(minJump, 1+ f(i+j));
        }
        return dp[i]= minJump;
     }
     return f(0);
};
