/**
 * link: https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
    let count = 0;
    let minCount = Infinity;
    for(let i=0;i<k;i++) {
        if(blocks[i]=='W'){
            count++;
        }
    }
    minCount = Math.min(minCount, count);
    for(let right = k;right < blocks.length;right++){
        if(blocks[right]=='W'){
            count++;
        }
        if(blocks[right-k]=='W'){
            count--;
        }
        minCount = Math.min(count, minCount);
    }
    return minCount;
};
