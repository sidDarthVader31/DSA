/**
 * https://leetcode.com/problems/3sum/
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(arr) {
    arr = arr.sort(function(a, b) {
        return a - b;
    });
    const output = [];
    for(let i = 0;i < arr.length;i++){
        if(i >0 && arr[i] == arr[i-1]){
            continue;
        }
        let left = i+1;
        let right = arr.length -1;
        while(left < right){
            let sum = arr[left]+ arr[right]+ arr[i];
            if(sum <0){
                left++;
            }
            else if (sum > 0){
                right --;
            }
            else{
                output.push([arr[i], arr[left], arr[right]])
                while(left < right && arr[left] == arr[left+1]){
                    left++
                }
                while(left < right && arr[right] == arr[right-1]){
                    right--;
                }
                left++;
                right--;
            }
        }
    }
    return output;
   }
