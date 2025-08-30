/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[0]-b[0]);
    let output = [];
    output.push(intervals[0]);
    let index = 0;
    let lastEnd = intervals[0][1];
    for(let i =1;i< intervals.length;i++){
        const [start, end] = intervals[i];
        if(start <= lastEnd) {
            //merge these intervals 
            output[index][1] =  Math.max(output[index][1], end);
            lastEnd = output[index][1];
        }
        else{
            output.push([start,end]);
            lastEnd = end;
            index++;
        }
    }
    return output;
};
