/**
 * link: https://leetcode.com/problems/move-zeroes/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let left = 0;
    let right = 1;

    while(right < nums.length){
        if(nums[left] !=0){
            left++;
            right = left+1;
            continue;
        }
        if(nums[right] == 0){
            right++;
            continue;
        }
        nums[left] = nums[right];
        nums[right]=0;
        left++;
        right = right+1;
    }
};
