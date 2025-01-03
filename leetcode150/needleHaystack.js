/**
 * link: https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-strin
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let length = needle.length;
    if(needle.length > haystack.length || needle.length == 0){
        return -1;
    }
    let left = 0;
    let right = needle.length-1;

    for(left = 0;left< haystack.length;left++){
        let string = haystack.substring(left, right+1);
        if(string == needle){
            return left;
        }
        else{
            right++;
        }
    }
    return -1;
};
