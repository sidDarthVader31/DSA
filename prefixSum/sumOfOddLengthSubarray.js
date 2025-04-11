/**
 * link: https://leetcode.com/problems/sum-of-all-odd-length-subarrays/description/
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let prefix = [];
    let sum = 0;
    for(let i = 0;i< arr.length;i++){
        sum = sum + arr[i];
        prefix.push(sum)
    }
    let megaSum = 0;
    for(let i=0;i<arr.length;i++){
        let sumToAdd = prefix[i-1];
        if(!sumToAdd){
            sumToAdd = 0;
        }
        for(let j=i;j<arr.length;j++){
            if((j-i+1) %2 !=0){
                megaSum = megaSum + prefix[j] - sumToAdd;
            }
        }
    }
    return megaSum;
};
