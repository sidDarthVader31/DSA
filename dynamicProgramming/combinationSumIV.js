/** link : https://leetcode.com/problems/combination-sum-iv/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    const dp = new Array(target).fill(undefined);
    const f = (total) => {
        //f(target) -> no of ways in which we can achieve target from 0-i
        if(total == 0) return 1;
        if(dp[total]!= undefined) return dp[total];
        let ways = 0;
        for(let num of nums) {
            if(num<=total){
                ways = ways + f(total-num)
            }
        }
        return dp[total] = ways;
    }
    return f(target)
};


/**
 * tabulation approach for combination sum IV
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    const dp = new Array(target + 1).fill(0);
    dp[0] = 1
    for(let total =1;total<=target;total++){
        for(const num of nums){
            if(num <= total){
                dp[total] = dp[total] + dp[total-num]
            }
        }
    }
    return dp[target]
};
