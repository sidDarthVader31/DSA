/**
 * link :"https://leetcode.com/problems/network-delay-time/description/"
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    let graph = new Array(n).fill(0).map(()=>{
        return []
    })
    for(const [u,v,w] of times) {
        graph[u-1].push([v-1,w])
    }
    const dist = new Array(n).fill(Infinity);
    dist[k-1] =0;

    let heap = new Array();
    heap.push([k-1,0]);

    while(heap.length >0){
        heap.sort((a,b)=> a[1]-b[1]);
        const [v, w] = heap.shift();
        if(w > dist[v]) continue;

        for(const [edge, weight] of graph[v]){
            if(dist[v] + weight < dist[edge]){
                dist[edge] = dist[v]+weight;
                heap.push([edge, dist[edge]])
            }
        }
    }
    let ans = Math.max(...dist);
    return ans == Infinity ?-1: ans

}
