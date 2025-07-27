/**
 * link : https://leetcode.com/problems/network-delay-time/
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    let graph = new Array(n).fill(0).map(()=> []);
    let distances = new Array(n).fill(Infinity);
    let visited = new Set();

    for(const [u,v,t] of times) {
        graph[u-1].push([v-1,t]);
    }
    distances[k-1]=0;

    let queue=[];
    queue.push([k-1,0]);

    while(queue.length >0){
        queue = queue.sort((a,b)=> a[1]-b[1]);
        let [node, time] = queue.shift();
        visited.add(node);
        for(const [edge, dist] of graph[node]){
            if(distances[edge] > dist+time ){
                distances[edge] = dist+time;
                queue.push([edge, distances[edge]])
            }
        }
    }
    let max = Math.max(...distances);
    return max==Infinity ? -1: max;
};
