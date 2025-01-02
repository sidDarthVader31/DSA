/**
 * link : https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let left = 2;
    for(let right = 2;right < nums.length;right++){
        if(nums[right]!== nums[left-2]){
            nums[left] = nums[right]
            left++;
        }
    }
    return left
};
