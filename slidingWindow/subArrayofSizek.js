/**
 * link: https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/description/
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    let count = 0;
    let sum = 0;
    for(let i = 0;i<k;i++){
        sum = sum + arr[i]
    }
    if(avg>= threshold){
        count++;
    }
    for(let i = k;i< arr.length;i++){
        sum = sum + arr[i] - arr[i-k];
        avg = sum/k;
        if(avg>= threshold){
            count++;
        }
    }
    return count;
};
