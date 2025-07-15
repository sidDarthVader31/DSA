/**
 * link; https://leetcode.com/problems/time-needed-to-inform-all-employees/
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {
    let count = 0;
    let graph = new Array(manager.length).fill(0).map(()=>{
        return [];
    });
    for(let i =0;i<manager.length;i++){
        if(i== headID){
            continue;
        }
        graph[manager[i]].push(i);
    }
    let queue = [[headID,0]];
    while(queue.length >0){
        let [man, timesoFar] = queue.shift();
        count  = Math.max(count, timesoFar)
        let subordinates = graph[man];
        for(let i = 0;i< subordinates.length;i++){
                queue.push([subordinates[i],timesoFar+ informTime[man]]);
        }
    }
    return count;
};
