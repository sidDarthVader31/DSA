/**
 * link: https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/description/
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let ans = 0;
    let min = -Infinity;
    let right = 0
    for(let i = 0;i< weights.length;i++){
        min = Math.max(min, weights[i]);
        right  = right + weights[i];
    }
    let left = min;
    while(left<=right){
        let midWeight = Math.floor((left+right)/2);
        if(canShipWeight(midWeight,days, weights)){
            ans = midWeight;
            right = midWeight-1;//we can search for more smaller weight
        }
        else{
            left = midWeight+1;
        }
    }
    return ans;
};

const canShipWeight = ( capacity, daysD, weights) =>{
     let days = 1;
  let currentLoad = 0;
  
  for (const packageWeight of weights) {
    // If adding this package exceeds capacity, start a new day
    if (currentLoad + packageWeight > capacity) {
      days++;
      currentLoad = packageWeight;
    } else {
      // Otherwise, add it to current day's load
      currentLoad += packageWeight;
    }
  }
  return days <=daysD
}
