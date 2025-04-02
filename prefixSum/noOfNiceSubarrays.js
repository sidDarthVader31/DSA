/**
 * link: https://leetcode.com/problems/count-number-of-nice-subarrays/description/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    for(let i = 0;i< nums.length;i++){
        if(nums[i]%2 == 0){
            nums[i] =0;
        }
        else{
            nums[i] =1;
        }
    }
    //use prefix sum now 
    let prefixSum =0 ;
    let map ={}
    let count = 0;
    map[0] =1;
    for(let i =0;i< nums.length;i++){
        prefixSum = prefixSum + nums[i];
        count = count + (map[prefixSum-k]||0);
        map[prefixSum] = (map[prefixSum]||0) + 1;
    }
    return count;
};
