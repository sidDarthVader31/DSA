/**
 * link: https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map ={};
    let left = 0;
    let right = 0;
    let maxLength = 0;
    for(;right< s.length;right++){
        //expand the window
        map[[s[right]]] = (map[s[right]]||0) + 1;

        //if condition is violated, then shrink the window
        while(map[s[right]] > 1){
            map[s[left]] = (map[s[left]]||0) -1;
            if(map[s[left]]<1){
                map[s[left]] == 0;
            }
            left++;
        }
        maxLength = Math.max(maxLength, (right-left+1));
    }
    return maxLength;
};
