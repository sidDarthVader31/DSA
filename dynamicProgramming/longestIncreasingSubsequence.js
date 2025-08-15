/**
 * link : https://leetcode.com/problems/longest-increasing-subsequence/
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const n = nums.length;
    const dp = new Array(n).fill(0).map(()=>{
        return new Array(n+1).fill(undefined)
    });

    const f= (i, next) => {
        // f(i, next) => longest increasing subsequence from 0-i when next is next element 
        if(i<0) return 0;

        if(dp[i][next+1]!= undefined) return dp[i][next+1];
        
        //either pick or skil 
        let skip = f(i-1, next);
        let pick = 0;

        if(next == -1 || nums[i]< nums[next]){
            //pick the element 
            pick = f(i-1, i)+1;
        }
        return dp[i][next+1] = Math.max(pick, skip);
    }

    return f(n-1, -1)
};
