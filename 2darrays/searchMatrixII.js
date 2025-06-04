/**
 * link :
 * https://leetcode.com/problems/search-a-2d-matrix-ii/
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
//not efficient because we are not using sorting of rows
var searchMatrix = function(matrix, target) {
  
    let colMax = matrix[0].length-1;
    for(let i = 0;i< matrix.length;i++){
        if(target >=matrix[i][0] && target <=matrix[i][colMax]){
              let left = 0;
              let right = matrix[0].length-1;
            //found target row 
            while(left <=right){
                let mid = Math.floor((left+right)/2);
                if(matrix[i][mid] == target){
                    return true;
                }
                else if (target > matrix[i][mid]){
                    left = mid+1;
                }
                else{
                    right = mid-1;
                }
            }
        }
    }
    return false
};
