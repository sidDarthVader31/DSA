/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    const reverse = s.split('').reverse().join('')
    let n = s.length
    const dp = new Array(n+1).fill(0).map(()=>{
        return new Array(n+1).fill(0)
    });


    for(let i =1;i<=n;i++){
        for(let j=1;j<=n;j++){

            if(s[i-1] == reverse[j-1]){
                dp[i][j] = 1 + dp[i-1][j-1]
            }
            else{
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    return dp[n][n]
};



/**
 * memoization - without reversing the string
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    let n = s.length
    const dp = new Array(n+1).fill(0).map(()=>{
        return new Array(n+1).fill(undefined)
    });

    const f = (i,j) =>{
        if(i>j)return 0;
        if(i==j) return 1;
        if(dp[i][j]!= undefined) return dp[i][j]
        if(s[i] == s[j]){
            return dp[i][j] = 2 + f(i+1,j-1);
        }
        return dp[i][j] = Math.max(f(i+1, j), f(i, j-1))
    }
    return f(0, n-1)
};
