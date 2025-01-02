/**
 * link: https://leetcode.com/problems/rotate-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let output = [...nums];
    k = k % nums.length;
    for(let i = 0;i< output.length;i++){
        if((i+k) < output.length){
            nums[i+k] = output[i]
        }
        else if (i+k - nums.length <=nums.length) {
            nums[i+k - nums.length] = output[i]
        }
    }
};                                                                                                                                                                            
