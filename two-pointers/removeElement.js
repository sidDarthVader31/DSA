/**
 * link : https://leetcode.com/problems/remove-element/
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * runtime: beats100%, memory: 87.42%
 */
var removeElement = function(nums, val) {
    let count = 0;
    let left = 0;
    let right = 1;
     while( left < right && right < nums.length){
        if(nums[left]!=val){
            left++;
            right = left+1;
            continue;
        }
        else if(nums[right] == val){
            right++;
            continue;
        }
        else {
            //swap them 
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
            right = left+1;
        }
     }
    
     for(let i = 0;i< nums.length;i++){
        if(nums[i]== val){
            count++;
        }
     }
     return nums.length-count;
}

//more optimized
var removeElement = function(nums, val) {
    let left = 0;
    let right = nums.length - 1;
    
    while(left <= right) {
        // Find val from left
        while(left <= right && nums[left] !== val) {
            left++;
        }
        
        // Find non-val from right
        while(left <= right && nums[right] === val) {
            right--;
        }
        
        // If pointers still valid, swap
        if(left < right) {
            nums[left] = nums[right];
            nums[right] = val;
            left++;
            right--;
        }
    }
    
    return left;
}
var removeElement = function(nums, val) {
    let left = 0;
    let right = nums.length - 1;
    
    while(left <= right) {
        // Find val from left
        while(left <= right && nums[left] !== val) {
            left++;
        }
        
        // Find non-val from right
        while(left <= right && nums[right] === val) {
            right--;
        }
        
        // If pointers still valid, swap
        if(left < right) {
            nums[left] = nums[right];
            nums[right] = val;
            left++;
            right--;
        }
    }
    
    return left;
}
