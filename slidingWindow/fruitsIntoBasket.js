/**
 * link: https://leetcode.com/problems/fruit-into-baskets/
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let maxFruits = 0;
    let count= 0;
    let map ={}; //for basket 
    let left = 0;//sliding window start
    for(let i =0;i< fruits.length;i++){
        map[fruits[i]] = (map[fruits[i]] ||0) + 1; //expand the window 
        count++;
        if(Object.keys(map).length > 2){
            //shrink the window 
            map[fruits[left]] = map[fruits[left]] - 1
            if(map[fruits[left]] == 0){
                delete map[fruits[left]];
            }
            left++;
            count--;
        }
        maxFruits = Math.max(count, maxFruits);
    }
    return maxFruits;
};
