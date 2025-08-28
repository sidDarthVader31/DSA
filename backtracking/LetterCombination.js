/**
 * lilnk: https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const keys = {
        2: ["a","b","c"],
        3:["d","e","f"],
        4:["g","h","i"],
        5:["j","k","l"],
        6:["m","n","o"],
        7:["p","q","r",'s'],
        8:["t","u","v"],
        9:["w","x","y","z"]
    };
    if(digits.length == 0) return []

    const output = [];
    const path = [];
    const dfs = (start) => {
        if(start == digits.length && path.length == digits.length){
            output.push(path.join(''));
        }
        let char = digits[start];
        const key = keys[char];
        for(let i = start;i< digits.length;i++){
            for(let j = 0;j< key.length;j++){
                path.push(key[j]);
                dfs(i+1);
                path.pop();
            }
        }
    }
    dfs(0)
    return output;
};
