/**
 * link: https://leetcode.com/problems/unique-paths-ii/
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const rows = obstacleGrid.length;
    const cols = obstacleGrid[0].length;
    const dp = new Array(rows).fill(0).map(()=>{
        return new Array(cols).fill(undefined)
    });

    const f = (i,j) =>{
        //f(i,j) -> no of unique paths a robot can take to reach i,j
        //base cases - when on 0,0 -> return 1 already there 
        // i<0 || j<0 -> out of bound 
        // if [i][j]= obstacle - discard the path 
        if(i<0 || j<0) return 0;
        if(obstacleGrid[i][j]==1) return 0;
        if(i==0 && j==0) return 1;
        
        if(dp[i][j]!= undefined) return dp[i][j];

        return dp[i][j] = f(i-1,j) + f(i,j-1)
    }
    return f(rows-1, cols-1)
};
