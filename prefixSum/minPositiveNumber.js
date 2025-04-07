/**
 * link: https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/description/
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let prefixSum = 0;
    let minPositive = Infinity;
    let minNegative = 0;
    for(let i =0;i< nums.length;i++){
        prefixSum = prefixSum + nums[i];
        minNegative = Math.min(prefixSum, minNegative);
    }
    if(minNegative ==0){
        return 1 ;
    }
    return (minNegative*-1) + 1;
};
