/**
 * link: https://leetcode.com/problems/edit-distance/
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const n = word1.length;
    const m = word2.length;

    const dp = new Array(n).fill(0).map(()=>{
        return new Array(m).fill(undefined);
    });

    const f = (i,j) => {

        if(i < 0) return j + 1; // need to insert remaining j+1 characters
        if(j < 0) return i + 1;

        if(dp[i][j]!= undefined) return dp[i][j];

        if(word1[i] == word2[j]){
            return dp[i][j] = f(i-1, j-1)
        }
        return dp[i][j] = 1+ Math.min(
            f(i-1, j),
            f(i,j-1),
            f(i-1,j-1)
        );
    }
    
    return f(n-1,m-1)

};
