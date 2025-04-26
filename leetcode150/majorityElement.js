/**
 * link: https://leetcode.com/problems/majority-element/description
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = {};
    let n = nums.length
    for(let i = 0;i< nums.length;i++){
        map[nums[i]] = (map[nums[i]] || 0) + 1;
        if(map[nums[i]] > Math.floor(n/2)){
            return nums[i];
        }
    }
    return -1;
};
