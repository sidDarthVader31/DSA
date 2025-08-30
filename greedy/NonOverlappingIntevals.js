/**
 * link : https://leetcode.com/problems/non-overlapping-intervals/description/
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals = intervals.sort((a,b)=> a[1]-b[1])
    let count = 0;
    let pos = 0;
    for(let i = 1;i< intervals.length;i++){
        let [start, end] = intervals[i]
        let [lastStart, lastEnd] = intervals[pos];
        if(start < lastEnd){
            count++;
        }
        else{
            pos=i
        }
    }
    return count;
};
