/**
 * link: https://leetcode.com/problems/house-robber/description/
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const max = new Array(nums.length);
    const dp = (index) =>{
        if(index >= nums.length) return 0;
        if(max[index]!=undefined){
            return max[index];
        }
        max[index]= Math.max((nums[index]+ dp(index+2)), dp(index+1));
        return max[index];
    }
    return dp(0);

};
