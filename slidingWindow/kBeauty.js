/**
 * link: https://leetcode.com/problems/find-the-k-beauty-of-a-number/description/
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
    let count = 0;
    let s = `${num}`;
    let no='';
    for(let i =0;i<s.length;i++){
        no = no+ s[i];
       if(no.length == k){
        if(num% (+no) == 0){
            count++;
        }
        //update the window 
        no= no.substring(1);
       }
    }
    return count;
};
