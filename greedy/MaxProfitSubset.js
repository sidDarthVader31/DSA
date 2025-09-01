// User function Template for javascript
// link : https://www.geeksforgeeks.org/problems/maximum-profit-by-choosing-a-subset-of-intervals--170645/1
/**
 * @param {number} n
 * @param {number[][]} intervals
 * @returns {number}
 */

class Solution {
    // Function to find the maximum profit.
    maximum_profit(n, intervals) {
        // your code here
        intervals.sort((a, b) => a[1] - b[1]);
        
        function findPrevious (i) {
            let left = 0;
            let right = i-1; // left most before i
            let ans = -1;
            
            while(left<=right) {
                let mid = Math.floor((left+right)/2);
                if(intervals[mid][1] <= intervals[i][0]){
                    ans = mid;
                    left =mid+1;
                }
                else{
                    right = mid-1;
                }
            }
            return ans;
        }
        const memo = new Array(n).fill(undefined);
        function f(i) {
            //f(i)-> max profit while choosing non overlapping intervals from 0-i
            if(i<0) return 0;
            if(memo[i]!= undefined) return memo[i];
            
            const exclude = f(i-1);
            let include = intervals[i][2];
            let prevInclude = findPrevious(i);
            if(prevInclude != -1) include = include+ f(prevInclude);
            return memo[i] = Math.max(include, exclude)
        }
        return f(n-1)
    }
}
