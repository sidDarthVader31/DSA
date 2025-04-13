/**
 * link: https://leetcode.com/problems/successful-pairs-of-spells-and-potions
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    let output =[];
    const sortedPotions = potions.sort(function(a, b) {
        return a - b;
        })

        for(let i = 0;i< spells.length;i++){
            let spell = spells[i];
            let left = 0;
            let right = sortedPotions.length-1;
            while(left<=right){
                let mid = Math.floor((left+right)/2);
                if(sortedPotions[mid]* spell < success){
                    left = mid+1;
                }
                else{
                    right = mid-1
                }
            }
            output.push(potions.length - left)
        }
        return output;
};

