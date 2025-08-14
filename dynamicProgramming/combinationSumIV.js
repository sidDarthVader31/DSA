/** link : https://leetcode.com/problems/combination-sum-iv/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    const n = nums.length;
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
