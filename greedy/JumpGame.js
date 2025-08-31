/**
 * link : https://leetcode.com/problems/jump-game/description/
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxIndex = 0;
    for(let i = 0;i< nums.length;i++){
        if(maxIndex >= nums.length-1) return true;
        if(i >maxIndex) return false;
        const maxJump = i + nums[i];
        maxIndex = Math.max(maxIndex, maxJump);
    }
    return false;
};
