/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const memo = {}
    const dp = (i, total) =>{
        const key = `${i},${total}`
        if(memo[key] !=undefined) return memo[key];
        //base case 
        if(i ==-1) return total == target?1:0

        let add = dp(i-1, total+ nums[i])
        let subtract = dp(i-1, total-nums[i])
        memo[key] = add + subtract;
        return memo[key]
    }
    return dp(nums.length-1, 0)
};
