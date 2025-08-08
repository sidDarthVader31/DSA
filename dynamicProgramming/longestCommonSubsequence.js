/**
link: https://leetcode.com/problems/longest-common-subsequence/
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {

    const dp = new Array(text1.length).fill(0).map(()=>{
        return new Array(text2.length).fill(undefined);
    });

    const f = (i,j) => {
        //longest subsequence of strings with length i-1 and j-1;
        if(i <0 || j<0) return 0;
        if(dp[i][j]!= undefined) return dp[i][j];
        if(text1[i]== text2[j]){
            return dp[i][j] = 1 + f(i-1,j-1)
        }
        return dp[i][j] = Math.max(f(i-1,j), f(i,j-1), f(i-1, j-1));
    }
    return f(text1.length-1, text2.length-1)
};
