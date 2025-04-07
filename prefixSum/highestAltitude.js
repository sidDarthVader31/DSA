/**
 * link: https://leetcode.com/problems/find-the-highest-altitude/description/
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
   let prefixSum = 0;
   let maxAltitude = 0;
   for(let i = 0;i< gain.length;i++){
    prefixSum = prefixSum + gain[i]
    maxAltitude = Math.max(prefixSum, maxAltitude)
   }
   return maxAltitude;
};

