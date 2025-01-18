/**
 * link : https://leetcode.com/problems/find-pivot-index/description/
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
   let prefix = [];
   let sum = 0;
   for(let i =0;i< nums.length;i++){
    sum = sum + nums[i];
    prefix.push(sum);
   }

   for(let i = 0;i< prefix.length;i++){
        let leftSum = prefix[i-1];
        let rightSum = prefix[prefix.length-1] - prefix[i]
        if(i ==0){
        leftSum = 0;
        }
        else if (i == prefix.length-1){
        rightSum  =0;
        }
        if (leftSum == rightSum){
            return i;
        }
   }
   return -1;
};
