/**
 * link: https://leetcode.com/problems/continuous-subarray-sum/description/
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    let modMap = new Map();
    modMap.set(0, -1); 
    let prefixSum = 0;

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        let remainder = prefixSum % k;

      
        if (remainder < 0) remainder += k;

        if (modMap.has(remainder)) {
            if (i - modMap.get(remainder) > 1) {
                return true;
            }
        } else {
            modMap.set(remainder, i); // Store the first occurrence of the remainder
        }
    }
    return false;
};
