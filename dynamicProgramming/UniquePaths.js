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


/**
 * tabulation approach
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const dp  = new Array(m+1).fill(0).map(()=>{
        return new Array(n+1).fill(0)
    });
    for(let i = 0;i<m;i++){
        dp[i][0]=1; // all rows of first column will have only one unique path 
    }
    for(let i =0;i<n;i++){
        dp[0][i]=1; // all columns in first row will have only one unique path
    }
    for(let i =1;i<m;i++){
        for(let j =1;j<n;j++){
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }
    }
    return dp[m-1][n-1]
};
