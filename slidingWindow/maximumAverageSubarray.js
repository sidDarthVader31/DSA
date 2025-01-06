/**
 * link: https://leetcode.com/problems/maximum-average-subarray-i/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum  =0;
    let length= nums.length
    for(let i = 0;i<k;i++){
        sum = sum+nums[i]
    }
    let maxAverage = sum/k;
    for(let i =k;i< nums.length;i++){
        sum = sum+ nums[i] - nums[i-k] ;
        avg = sum/k;
        maxAverage = Math.max(avg, maxAverage);
    }
    return maxAverage;
};
