
/**
 * link: https://leetcode.com/problems/minimum-genetic-mutation/description/
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
    let count = 0;
    const choices = [`A`,'C', 'G','T'];
    let queue = [];
    queue.push(startGene);
    let visited = new Set();
    while(queue.length >0){
        let size = queue.length;
        for(let i = 0;i< size;i++){
        let str = queue.shift();
        if(str == endGene){
            return count;
        }
        for(let i =0;i<str.length;i++){
            for(let j =0;j<choices.length;j++){
                if(str[i]== choices[j]){
                    continue;
                }
                let s = replaceChar(str, i, choices[j])
                if(bank.includes(s) && !visited.has(s)){
                    queue.push(s);
                    visited.add(s);
                }
            }
        }
    }
       count++;
    }
    return -1;
};

function replaceChar(str, index, newChar) {
    return str.substring(0, index) + newChar + str.substring(index + 1);
}
