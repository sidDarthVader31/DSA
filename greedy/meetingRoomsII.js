
link : https://neetcode.io/problems/meeting-schedule-ii
/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        const startTime = intervals.map((element)=>{
            return element.start;
        }).sort((a,b)=> a-b);
        const endTime = intervals.map((element)=>{
            return element.end;
        }).sort((a,b)=> a-b);

        console.log(`start time:`, startTime)
        console.log(`end time:`, endTime);
        let start = 0;
        let end = 0;
        let count = 0;
        let res = 0
        while(start< intervals.length) {
            if(startTime[start]< endTime[end]){
                start++;
                count++;
            }
            else{
                end++;
                count--;
            }
            res = Math.max(res, count)
        }
        return res;
    }
}
