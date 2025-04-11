/**
 * link : https://leetcode.com/problems/search-in-rotated-sorted-array-ii
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
   let left =0;
    let right = nums.length - 1;

    while(left <=right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid] == target){
            return true;
        }
        if(nums[mid] == nums[left]){
            left++;
            continue;
        }

        //check where the target lies 
        if(nums[left]<= nums[mid]){
            if(target < nums[mid] && target >= nums[left]){
                right = mid -1;
            }
            else {
                left = mid +1;
            }
        }else{
            if(target > nums[mid] && target <= nums[right]){
                left = mid +1;
            }
            else{
                right = mid -1;
            }
        }
    }
    return false;
};
