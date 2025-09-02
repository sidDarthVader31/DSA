//link https://www.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1

class Solution {
    jobSequencing(deadline, profit) {
        // code here
        let totalJob = 0;
        let maxProfit = 0;
        let max = 0;
        let job = [];
        for(let i = 0;i<deadline.length;i++){
            max = Math.max(max, deadline[i]);
            job.push({
                deadline: deadline[i],
                profit: profit[i]
            })
        }
        let slots = new Array(max+1).fill(false);
        job.sort((a,b)=> b.profit-a.profit)
        for(let obj of job) {
            
            for(let j=obj.deadline;j>0;j--){
                if(!slots[j]){
                    totalJob ++;
                    maxProfit = maxProfit+ obj.profit;
                    slots[j]= true;
                    break;
                }
            }
        }
        return [totalJob, maxProfit]
    }
}
