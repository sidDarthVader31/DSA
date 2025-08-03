/**
 * link: https://leetcode.com/problems/house-robber-ii/
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
   if (nums.length === 1) return nums[0];
    return Math.max(
        dp(nums.length - 2, nums.slice(0, nums.length - 1), new Array(nums.length).fill(undefined)),
        dp(nums.length - 2, nums.slice(1), new Array(nums.length).fill(undefined))
    );
};

const dp = (i, nums, max) =>{
        if(i<=0)return nums[0]
        if(i==1) return Math.max(nums[0], nums[1]);
        if(max[i]!=undefined){
            return max[i]
        }
        return max[i]= Math.max(nums[i]+ dp(i-2, nums,max), dp(i-1, nums,max));
}
