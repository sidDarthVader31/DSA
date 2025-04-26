/**
 * link: https://leetcode.com/problems/next-greater-element-i/description/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}


 */
var nextGreaterElement = function(nums1, nums2) {
    let stack = [];
    let map = {};
    for(let i = 0; i< nums2.length;i++){
        while(stack.length > 0 && nums2[i] > stack[stack.length-1]){
            map[stack.pop()] = nums2[i]
        }
       
        stack.push(nums2[i])
    }
    let result = [];
    for(let i = 0;i< nums1.length;i++){
        result[i] = map[nums1[i]] || -1;
    }
    return result;
};
