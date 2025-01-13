/**
 * link: https://leetcode.com/problems/contains-duplicate-ii/description/
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let map = {};
    for(let i=0;i< Math.min(nums.length, k+1);i++){
        if(map[nums[i]]!=undefined){
            return true; }
        map[nums[i]] =i;
    }
    for(let i = k+1;i<nums.length;i++){
        delete map[nums[i-k-1]];
        if(map[nums[i]]!=undefined){
            return true;
        }
        map[nums[i]] = i;
    }
    return false;
};


// small optimization
var containsNearbyDuplicate = function(nums, k) {
    let map = {};
    let left = 0;
    for(let right = 0;right< nums.length;right++){
        if(map[nums[right]]!= undefined && (right-map[nums[right]])<=k){
            return true;
        }
        map[nums[right]]=right;
    }
    return false;
};
