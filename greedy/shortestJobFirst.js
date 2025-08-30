// User function Template for javascript
// link : https://www.geeksforgeeks.org/problems/shortest-job-first/1
/**
 * @param {TreeNode} bt
 * @returns {number}
 */

class Solution {
    // Function to solve the given problem.
    solve(bt) {
        const n = bt.length
        // your code here
        bt = bt.sort((a,b)=> a-b);
        let ct = 0;
        let waitingTime = 0;
        for(let job of bt){
            ct = ct +job;
            waitingTime = waitingTime +ct -job;
        }
        return Math.floor(waitingTime/n)
    }
}
