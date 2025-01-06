/**
 * link: https://leetcode.com/problems/minimum-size-subarray-sum/
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let sum = 0;
    let left = 0;
    let minLength = Infinity;
    for(let right = 0;right< nums.length;right++){
        sum = sum + nums[right];
        while(sum >=target){
            let length = right-left+1;
            minLength = Math.min(minLength, length);
            sum = sum - nums[left];
            left++
        }
    }
    return minLength == Infinity ? 0: minLength
};
