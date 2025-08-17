/**
 * link : https://leetcode.com/problems/partition-to-k-equal-sum-subsets/description/
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    let total  =0;
    for(const num of nums){
        total = total+ num;
    }
    if(total %k!=0) return 0;
    const target = total/k;
    const dp = new Map();
    const n = nums.length;
    const allUsed = (1 << n) - 1; // all elements used
    function f(mask, currSum) {
        if (mask === allUsed) {
            return currSum === 0 ? 1 : 0; // success only if last subset is complete
        }

        const key = `${mask}-${currSum}`;
        if (dp.has(key)) return dp.get(key);

        let total = 0;
        for (let i = 0; i < n; i++) {
            if (!(mask & (1 << i)) && currSum + nums[i] <= target) {
                if (currSum + nums[i] === target) {
                    // subset completed, start new subset
                    total += f(mask | (1 << i), 0);
                } else {
                    // continue filling current subset
                    total += f(mask | (1 << i), currSum + nums[i]);
                }
            }
        }

        dp.set(key, total);
        return total;
    }

    return f(0, 0);
};
