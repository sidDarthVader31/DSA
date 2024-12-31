/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let count = 1;
    let left = 0;
    let right = 1;

    while(right<nums.length){
        if(nums[left] == nums[right]){
            right++
        }
        else if(nums[left]!= nums[right]){
            //swap
            count++;
            let temp= nums[left+1];
            nums[left+1] = nums[right];
            nums[right] = temp;
            left++;
            right++
        }
    }
    return count;
};
