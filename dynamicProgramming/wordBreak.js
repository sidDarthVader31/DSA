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


/**
 * tabulation approach
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const dp = new Array(s.length+1).fill(false);
    dp[s.length]= true;
    for(let i = s.length;i>=0;i--){
        for(const word of wordDict){
            let len = word.length;
            if(i+word > s.length)continue;
            const substring = s.substring(i, i + len)
            if(substring == word && dp[i+len]){
                dp[i] = true;
            }
        }
    }

    return dp[0];
};
