/**
 * link: https://leetcode.com/problems/find-right-interval/description/
 *
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
    let result =[]
    let map = {}
    for(let i = 0;i< intervals.length;i++){
        map[intervals[i]] = i;
    }
    intervals1  = sort([...intervals])
    for(let i = 0;i< intervals.length;i++){
        let originalIndex = map[binarySearch(intervals1, intervals[i])]
        if(originalIndex == undefined){
            result[i] = -1;
        }
        else{
            result[i] = originalIndex
        }
    }
    return result;
};

 const binarySearch = (arr, interval) =>{
    let left = 0;
    let right = arr.length-1;
    let result = -1;
    while(left <=right){
        let mid = Math.floor((left+right)/2);
        if(arr[mid][0] >= interval[1]){
            result = mid; //but we need more smaller element so we look in first half
            right = mid-1 ;
        }
        else{
            left  = mid+1;
        }
    }
    return result == -1 ? [-1,-1]: arr[result]
 }
 const sort = (arr) =>{
    for(let i = 0;i< arr.length;i++){
        for(let j = i+1;j< arr.length;j++){
            if(arr[i][0] > arr[j][0]){
                //swap 
                let temp = arr[i];
                arr[i] = arr[j]
                arr[j] = temp;
            }
        }
    }
    return arr;
 }
