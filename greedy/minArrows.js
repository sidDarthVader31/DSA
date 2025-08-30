/**
 * link : https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/description/
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a,b)=> a[1]-b[1]);
    let count = 1;
    let lastEnd = points[0][1];
    for(let i = 1;i<points.length;i++){
        const [start, end] = points[i];
        if(start <=lastEnd) {
            continue;
        }
        count++;
        lastEnd  = end;
    }
    return count;
};
