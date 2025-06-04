/**
 * link :
 * https://leetcode.com/problems/search-a-2d-matrix/
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let mid = -1;
    let left = 0;
    let right = matrix.length-1;

    while(left<= right){
         mid = Math.floor((left+right)/2);
        let midLength = matrix[mid].length;
        if(target <= matrix[mid][midLength-1] && target >= matrix[mid][0]){
            break;
        }
        else if (target < matrix[mid][0]){
            right = mid-1;
        }
        else{
            left = mid+1;
        }
    }
    if(mid == -1){
        return false;
    }
    return search(matrix[mid], target)
};

const search = (nums, target)=>{
    let left = 0;
    let right = nums.length -1 ;

    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid]==target){
            return true;
        }
        else if (target > nums[mid]){
            left = mid+1;
        }
        else{
            right = mid-1;
        }
    }
    return false;
}
