/**
 * link: https://leetcode.com/problems/kth-largest-element-in-an-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
     const quickSelect = (nums, left, right, targetIdx) => {
        if (left === right) {
            return nums[left];
        }

        let pivot = nums[left];
        let low = left;
        let high = right;

        while (low <= high) {
            while (low <= high && nums[low] < pivot) {
                low++;
            }
            while (low <= high && nums[high] > pivot) {
                high--;
            }
            if (low <= high) {
                [nums[low], nums[high]] = [nums[high], nums[low]];
                low++;
                high--;
            }
        }

        if (targetIdx <= high) {
            return quickSelect(nums, left, high, targetIdx);
        } else if (targetIdx >= low) {
            return quickSelect(nums, low, right, targetIdx);
        } else {
            return nums[targetIdx];
        }
    };

    const targetIdx = nums.length - k;
    return quickSelect(nums, 0, nums.length - 1, targetIdx); 
};
