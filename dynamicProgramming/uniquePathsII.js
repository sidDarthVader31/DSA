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



/*
 * tabulation method
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const rows = obstacleGrid.length;
    const cols = obstacleGrid[0].length;
    const dp = new Array(rows).fill(0).map(()=>{
        return new Array(cols).fill(0)
    });

    for(let i =0;i<rows;i++){
        if(obstacleGrid[i][0]==1)break;
        dp[i][0]=1;
    }

    for(let i=0;i<cols;i++){
        if(obstacleGrid[0][i]==1) break;
        dp[0][i] = 1
    }

    for(let i =1;i<rows;i++){
        for(let j =1;j<cols;j++){
            if(obstacleGrid[i][j]==1)continue;
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }
    }
    return dp[rows-1][cols-1]
};
