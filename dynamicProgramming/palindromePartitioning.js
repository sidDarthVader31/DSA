/**https://leetcode.com/problems/palindrome-partitioning/description/
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const n = s.length;
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

    const dp = new Array(n).fill(undefined)

    const f = (i) => {
        if( i == n) return [[]];
        if(dp[i]!= undefined) return dp[i]
        let output = [];
        for(let j = i;j<n;j++){
            if(pal[i][j]){
                let prefix = s.substring(i,j+1);
                let rest = f(j+1);
                for(let partition of rest) {
                    output.push([prefix, ...partition])
                }
            }
        }
        return dp[i]=output;
    }
    return f(0, n-1);
};
