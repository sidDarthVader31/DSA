/**
 * link; https://leetcode.com/problems/subarray-sum-equals-k/description/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let map = {};
    map[0] = 1;
    let prefixSum = 0;
    let count = 0;
    for(let i = 0;i< nums.length;i++){
        prefixSum = prefixSum + nums[i];
        count = count + (map[prefixSum-k]||0);
        map[prefixSum] = (map[prefixSum]||0) + 1;
    }
    return count;
};
