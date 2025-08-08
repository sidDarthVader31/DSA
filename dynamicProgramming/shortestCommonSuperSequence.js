/**
 * link: https://leetcode.com/problems/shortest-common-supersequence/description/
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function(str1, str2) {
    const n = str1.length;
    const m = str2.length;
    const dp = new Array(n+1).fill(0).map(()=>{
        return new Array(m+1).fill(undefined);
    });

    const f = (i, j) => {
        if (i === n || j === m) return "";

        if (dp[i][j] !== undefined) return dp[i][j];

        if (str1[i] === str2[j]) {
            return dp[i][j] = str1[i] + f(i + 1, j + 1);
        } else {
            const l1 = f(i + 1, j);
            const l2 = f(i, j + 1);
            return dp[i][j] = l1.length > l2.length ? l1 : l2;
        }
    };
    const common =  f(0,0)
    // Now merge str1 and str2 based on LCS to form SCS
    let i = 0, j = 0, k = 0;
    let result = "";

    while (k < common.length) {
        // Add all characters from str1 before common[k]
        while (i < str1.length && str1[i] !== common[k]) {
            result += str1[i++];
        }
        // Add all characters from str2 before common[k]
        while (j < str2.length && str2[j] !== common[k]) {
            result += str2[j++];
        }

        // Add the common character
        result += common[k];
        i++;
        j++;
        k++;
    }

    // Add remaining characters from both strings
    result += str1.slice(i);
    result += str2.slice(j);

    return result;
};
