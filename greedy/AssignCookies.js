/**
 * link : https://leetcode.com/problems/assign-cookies/
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    const m = s.length;
    g=g.sort((a,b)=> a-b);
    s= s.sort((a,b)=> a-b);
    let left = 0;
    let right = 0;
    while(left< m) {
        if(g[right]<= s[left]){
            right= right+1;
        }
        left= left+1;
    }
    return right;
};
