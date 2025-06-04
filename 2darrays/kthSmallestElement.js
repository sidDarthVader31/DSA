/**
 * link:
 * https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    const arr = [];
    let n = matrix.length;
    for(let i = 0;i< matrix.length;i++){
        arr.push(...matrix[i]);
    }

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
    return quickSelect(arr,0, arr.length-1, k-1)
};
