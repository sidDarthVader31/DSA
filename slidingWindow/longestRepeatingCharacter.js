/**
 * link: https://leetcode.com/problems/longest-repeating-character-replacement/description/
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
      let rightChar = s.charAt(right);
      map[rightChar] = (map[rightChar] || 0) + 1;
      count = Math.max(count, map[rightChar]);

      if( right-left+ 1 - count  > k ){
        let leftChar = s.charAt(left);
        map[leftChar] = map[leftChar]-1;
        left ++;
        count --;
      }
      maxLength = Math.max(right - left + 1);
    }
    return maxLength;
};
