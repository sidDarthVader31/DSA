/**
 * link : https://leetcode.com/problems/number-of-longest-increasing-subsequence/description/
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    const n  = nums.length;
    const dp = new Array(n).fill(1);
    const count = new Array(n).fill(1);
    //dp[i] -> LIS from 0-ith index;
    for(let i = 0;i< n;i++){
        for(let j = 0;j<i;j++){
                if(nums[i]> nums[j]){
                    if(dp[i] == dp[j]+1){
                        count[i]= count[i]+ count[j]
                    }
                    else if(dp[i]< dp[j]+1){
                        count[i]= count[j]
                    }
                dp[i] = Math.max(dp[i], dp[j]+1);
            }
        }
    }
    const maxLength =  Math.max(...dp);
    let output = 0;
    for(let i = 0;i<n;i++){
        if(dp[i]== maxLength){
            output = output + count[i]
        }
    }
    return output;
};
