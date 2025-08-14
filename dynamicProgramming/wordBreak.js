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
            if(i+len > s.length)continue;
            const substring = s.substring(i, i + len)
            if(substring == word && dp[i+len]){
                dp[i] = true;
            }
        }
    }

    return dp[0];
};


/**
 * word break - tabulation optimized
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const dp = new Array(s.length+1).fill(false);
    const set = new Set(wordDict);
    dp[s.length]= true;
    const maxLength = Math.max(...wordDict.map(w => w.length));
    const n = s.length;
    for(let i = n-1;i>=0;i--){
        for(let len =1;len<=maxLength && i+len <=n;len++){
            const substring = s.substring(i,i+len)
            if(set.has(substring) && dp[i+len]){
                dp[i]= true;
                break;
            }
        }
    }

    return dp[0];
};
