/**
 * link: https://leetcode.com/problems/unique-paths/description/
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {

    const directions = [[1,0],[0,1]]

    const dp  = new Array(m+1).fill(0).map(()=>{
        return new Array(n+1).fill(undefined)
    })
    const f = (i,j) =>{
        //f(i,j) -> no of ways to go from 0,0 to i,j 
        //f(0,0) -> 0 

       if(i==0 && j==0) return 1;
       if(i<0 || j <0) return 0
        if(dp[i][j]!= undefined) return dp[i][j];
        //f(i,j) = f(i-1, j) + f(i, j-1)

        return dp[i][j] =  f(i-1,j) + f(i, j-1);
    }  
    return f(m-1,n-1)
};
