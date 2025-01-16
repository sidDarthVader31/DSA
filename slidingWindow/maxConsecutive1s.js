/**
 * link : https://leetcode.com/problems/max-consecutive-ones-iii/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(arr, n) {
    let maxLength = 0;
    let left = 0;
    let right = 0;
    let count = 0;

    for(;right<arr.length;right++){
        //expand the window 
        if(arr[right] == 0){
            count++;
        }
        while(count > n){
            //shrink the window if condition is voilated
            if(arr[left] == 0){
                count--;
            }
            left++;
        }
        let length = right - left+1;
        maxLength= Math.max(length, maxLength);
    }
    return maxLength;
};
