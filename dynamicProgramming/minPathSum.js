/**
 * link: https://leetcode.com/problems/minimum-path-sum/
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const dp = new Array(rows).fill(0).map(()=>{
        return new Array(cols).fill(undefined)
    });

    const f= (i,j) =>{
        //f(i,j) ->  path with minimum sum from 0,0 to i,j
        if(i<0 || j<0) return Infinity;
        if(i==0 && j==0) return grid[0][0];
        if(dp[i][j]!= undefined) return dp[i][j];
        return dp[i][j] = grid[i][j] + Math.min(
            f(i-1,j),
            f(i,j-1)
        )
    }
    return  f(rows-1, cols-1)
};
