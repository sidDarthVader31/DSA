/**
 * link: https://leetcode.com/problems/longest-repeating-character-replacement/description/
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
     let left = 0;
    let map = {};
    let maxLength = 0;
    let count = 0;
    for(let right = 0;right < s.length;right++){
      map[s[right]] = (map[s[right]] || 0) + 1;
      count = Math.max(count, map[s[right]]);

      if( right-left+ 1 - count  > k ){
        map[s[left]] = map[s[left]]-1;
        left ++;
        count --;
      }
      maxLength = Math.max(right - left + 1);
    }
    return maxLength;
};
