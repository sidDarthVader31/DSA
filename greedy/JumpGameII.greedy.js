/**
 *  link : https://leetcode.com/problems/jump-game-ii/description/
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let count = 0;
    let start = 0;
    let maxJump =0;
    for(let i = 0;i< nums.length-1;i++){
        maxJump = Math.max(maxJump, i + nums[i]);
        if(i == start){
            count++;
            start =  maxJump;
        }
    }
    return count;
};
