/**
 * link: https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for(let i = 0;i<s.length;i++){
        let char = s[i];
        if((char == ')' && stack[stack.length-1] == '(') ||
        char == ']' && stack[stack.length-1] == '[' ||
        char == '}' && stack[stack.length-1] == '{'
        ){
            stack.pop();
        }
        else{
            stack.push(char)
        }
    }
    return stack.length == 0;
};
