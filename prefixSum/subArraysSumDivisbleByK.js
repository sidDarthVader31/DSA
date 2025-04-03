/**
 * link: https://leetcode.com/problems/subarray-sums-divisible-by-k/description/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    let prefixSum = 0;
    let count=0;
    let map = new Map();
    map.set(0,1)
    for(let i = 0;i< nums.length;i++){
        prefixSum = prefixSum + nums[i];
        let remainder = prefixSum % k;
        if(remainder<0){
            remainder = remainder+k;
        }
        if(map.has(remainder)){
          count = count + map.get(remainder);
          map.set(remainder, map.get(remainder) + 1);
        }
        else{
            map.set(remainder,1)
        }
    }
    return count;
};
