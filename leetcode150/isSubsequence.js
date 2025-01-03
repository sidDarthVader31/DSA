/**
 * link: https://leetcode.com/problems/is-subsequence/description
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let left = 0;
    let index = 0;
    for(right = 0;right < t.length;right++){
        if(t[right] == s[index]){
            left++;
            index++;
        }
    }
    return left == s.length;
};

