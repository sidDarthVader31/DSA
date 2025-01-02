/**
 * link: https://leetcode.com/problems/reverse-words-in-a-string
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let output = '';
    let word = ''
    for(let i = 0;i< s.length;i++){
        if(s[i] != ' '){
            word = word + s[i];
        }
        else if (s[i] == ' ' && word.length >0){
            //word complete 
            output = ' ' + word + output;
            word = '';
        }
         if(i == s.length-1){
            output = word + output;
            word = ''
        }
    }

    return output.trim()
};
