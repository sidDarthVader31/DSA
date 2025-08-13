/**
 * link : https://leetcode.com/problems/word-break/description/
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const dp = new Array(s.length).fill(undefined);
    const f = (i) => {
        //f(i) -> returns if all the substring of string from s.length to i are present in wordDict

        if(i== s.length) return true;
        if(i> s.length) return false;

        if(dp[i]!= undefined) return dp[i];

        for(const word of wordDict) {
            const len = word.length;
            const substring = s.substring(i, i+len);
            if(substring == word && f(i+len)){
                return dp[i] = true;
            }
        }
        return dp[i]= false;
    }

    return f(0);
};
