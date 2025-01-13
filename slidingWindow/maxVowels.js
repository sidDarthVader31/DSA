/**
 * link: https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let maxVowels = 0;
    let vowels = 0;
    for(let i = 0;i<k;i++){
        if(isVowel(s[i])){
            vowels++;
        }
    }
    maxVowels = Math.max(vowels, maxVowels);
    for(let right =k;right< s.length;right++){
        if(isVowel(s[right])){
            vowels++;
        }
        if(isVowel(s[right-k])){
            vowels--;
        }
        maxVowels = Math.max(maxVowels, vowels);
    }
    return maxVowels;
};

const isVowel = (ch)=>{
    return ch == 'a' || ch =='e' || ch== 'i' || ch=='o' || ch=='u'
}
