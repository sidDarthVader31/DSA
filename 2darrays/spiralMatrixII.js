/**
 * link: https://leetcode.com/problems/spiral-matrix-ii/
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let top = 0;
    let bottom = n-1;
    let left = 0;
    let right = n-1 ;
    let num = 1;
    let output = new Array(n).fill(0).map(()=>{
        return new Array(n).fill(0);
    })
    while(top <= bottom && left <= right){
        //left to right 
        for(let col = left;col<=right;col++){
            output[top][col] = num++;
        }
        top++
        //top to bottom 
        for(let row = top;row<=bottom;row++){
            output[row][right] = num++;
        }
        right--;

        //right to left 
        for(let col = right;col >=left;col--){
            output[bottom][col] = num++;
        }
        bottom--;

        //bottom to top 
        for(let row = bottom;row >=top;row--){
            output[row][left] = num++;
        }
        left++
    }
    return output
};
