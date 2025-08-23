/**
 * link :https://leetcode.com/problems/palindrome-partitioning-ii/
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
    let n = s.length
    const dp = new Array(n).fill(0).map(() => {
        return new Array(n).fill(undefined)
    });
    const pal = Array(n).fill(0).map(() => Array(n).fill(false));
    for (let len = 1; len <= n; len++) {
        for (let i = 0; i + len - 1 < n; i++) {
            let j = i + len - 1;
            if (s[i] === s[j]) {
                if (len <= 2) pal[i][j] = true;
                else pal[i][j] = pal[i + 1][j - 1];
            }
        }
    }
    const f = (i, j) => {
        //f(i,j) -> min no of palindrome partitioning 

        if (i == j) return dp[i][j] = 0;
        if (dp[i][j] != undefined) return dp[i][j];

        if (pal[i][j]) return dp[i][j] = 0

        let min = Infinity;
        for (let k = i; k < j; k++) {
            if (pal[i][k]) {
                let minc = 1 + f(k + 1, j);
                min = Math.min(min, minc);
            }
        }
        return dp[i][j] = min;
    }
    return f(0, n - 1)
};
const isPalindrome = (s, i, j) => {
    let left = i;
    let right = j;

    while (left < right) {
        if (s[left] != s[right]) return false;
        left++;
        right--;
    }
    return true;
}



/**
 * link : tabulation
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
    let n = s.length
    const dp = new Array(n+1).fill(0).map(() => {
        return new Array(n+1).fill(0)
    });
    const pal = Array(n).fill(0).map(() => Array(n).fill(false));
    for (let len = 1; len <= n; len++) {
        for (let i = 0; i + len - 1 < n; i++) {
            let j = i + len - 1;
            if (s[i] === s[j]) {
                if (len <= 2) pal[i][j] = true;
                else pal[i][j] = pal[i + 1][j - 1];
            }
        }
    }

    for(let i = n-1;i>=0;i--){
        for(let j=i+1;j<n;j++){
            if(pal[i][j])continue;
            let min = Infinity;
            for(let k=i;k<j;k++){
                if(pal[i][k]){
                    let minc = 1 + dp[k+1][j];
                    min = Math.min(min, minc)
                }
            }
            dp[i][j] = min;
        }
    }
    return dp[0][n-1]
};
