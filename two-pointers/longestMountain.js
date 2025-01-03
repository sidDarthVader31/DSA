/**
 * link: https://leetcode.com/problems/longest-mountain-in-array
 * @param {number[]} arr
 * @return {number}
 */

//brute force solution
var longestMountain = function(arr) {
    let maxLength = 0;

    for(let i=0;i< arr.length;i++){
        let length = 0;
        let j=i,k=i;
        while(arr[j]> arr[j-1] && j >0){
            j--;
        }
        while(arr[k]>arr[k+1] && j< arr.length){
            k++;
        }
        length = ((k-j) >=2 && j<i && i<k) ? k-j+1: 0;
        maxLength = Math.max(maxLength, length)
    }
    return maxLength
};
