/**
 * link : https://leetcode.com/problems/trapping-rain-water/
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxL = 0;
    let maxR = 0;
    let water = 0;
    while(left < right){
        maxL = Math.max(maxL, height[left]);
        maxR = Math.max(maxR, height[right]);
        if(height[left]< height[right]){
            const waterTrapped = Math.min(maxL, maxR) - height[left];
            if(waterTrapped > 0){
            water= water+ waterTrapped;
            }
            left++;
        }
        else{
          const waterTrapped = Math.min(maxL, maxR) - height[right];
            if(waterTrapped > 0){
            water= water+ waterTrapped;
            } 
            right--;
        }
    }
    return water;
};

