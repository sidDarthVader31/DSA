/**
 * link: https://leetcode.com/problems/find-the-middle-index-in-array/
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    let prefixSum = [];
    let sum = 0;
    for(let i = 0;i< nums.length;i++){
        sum = sum + nums[i];
        prefixSum[i] = sum;
    }
    //calculate for i=0;'
    let leftSum = 0;
    let rightSum = prefixSum[prefixSum.length-1]- prefixSum[0];
    if(leftSum == rightSum){
        return 0
    }
    for(let i = 1;i< nums.length;i++){
        leftSum = prefixSum[i-1];
        rightSum = prefixSum[prefixSum.length-1] - prefixSum[i];
        if(leftSum == rightSum){
            return i
        }
    }
    return -1;
};
