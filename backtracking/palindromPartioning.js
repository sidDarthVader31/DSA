/**
 * link : https://leetcode.com/problems/palindrome-partitioning/
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let output = [];
    let path = [];
    const dfs = (start)=> {
        if(start == s.length) {
            output.push([...path]);
            return;
        }
        for(let i=start;i<s.length;i++) {
            let  substring = s.substring(start, i+1);
            if(isPalindrome(s, start, i)){
                path.push(substring);
                dfs(i+1);
                path.pop();
            }
        }
    }
    dfs(0)
    return output;
};
const isPalindrome = (s, start, end) => {
    if(start == s.length-1) return true;
    while(start< end) {
        if(s[start]!= s[end]) return false;
        start++;
        end--;
    }
    return true;
}
