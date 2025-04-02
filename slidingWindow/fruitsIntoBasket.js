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


const sol = (arr, k) =>{
  let maxSum = 0;
  let sum = 0;
  for(let i = 0;i< k;i++){
    sum = sum + arr[i];
  };
  maxSum = Math.max(sum, maxSum);
  console.log(`maxSum:`, maxSum);
  for(let i = k;i< arr.length;i++){
    console.log(`i:${i}, i-k:${i-k}`)

    sum = sum + arr[i] - arr[i-k];
    console.log(`sum now:`, sum);
    maxSum = Math.max(sum, maxSum);
    console.log(`maxSZum,:`, maxSum)
  }
  return maxSum;
}



console.log(sol([2,3,5,1,6], 2))
