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



/**tabulation
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const dp = new Array(rows).fill(0).map(()=>{
        return new Array(cols).fill(0)
    });

    let sum=0;
    for(let i=0;i<rows;i++){
        sum = sum + grid[i][0]
        dp[i][0]= sum;
    }
    sum =0
    for(let j=0;j<cols;j++){
        sum = sum + grid[0][j]
        dp[0][j]=sum;
    }
    for(let i =1;i< rows;i++){
        for(let j =1;j< cols;j++){
            dp[i][j] = grid[i][j] + Math.min(dp[i-1][j], dp[i][j-1])
        }
    }
    return dp[rows-1][cols-1]
};
