/**
 * link: https://leetcode.com/problems/distinct-subsequences/
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    let n = s.length;
    let m = t.length
    const dp = new Array(n).fill(0).map(()=>{
        return new Array(m).fill(undefined);
    });
    const f = (i, j) =>{
        // f(i,j) -> no of distinct subsequence of s[0.i] which equal to = t[0.j];
        if(j<0) return 1;
        if(i<0) return 0;
        if(dp[i][j] != undefined) return dp[i][j];
        if(s[i] == t[j]){
            dp[i][j] = f(i-1,j) + f(i-1,j-1) 
        }
        else {
            dp[i][j] = f(i-1,j) 
        }
        return dp[i][j]
    }
    return f(n-1,m-1);
   
};
