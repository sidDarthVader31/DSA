/**
 * link: https://leetcode.com/problems/cheapest-flights-within-k-stops/description/
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 * using Dijkstra
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    let graph = new Array(n).fill(0).map(()=>[]);

    for(const [u,v,c] of flights){
        graph[u].push([v,c])
    }
    let queue = [];
    queue.push([src, 0, 0]);

    let dist = new Array(n).fill(Infinity);
    dist[src]=0;

    while(queue.length>0){
        const [node, cost, stop] = queue.shift();
        if(stop>k)continue;

        for(const [edge,c] of graph[node]){
            if(dist[edge]> cost+c){
                dist[edge]= cost+c;
                queue.push([edge, dist[edge], stop+1])
            }
        }
    }
    return dist[dst] == Infinity ?-1: dist[dst]
}


/**
 * solution with bellmann ford algorithm
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 * using Bellman-Ford
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    let distance = new Array(n).fill(Infinity);
    distance[src] =0;

    for(let i =0;i<=k;i++){
        let temp = distance.slice(); 
        for(const [u,v,c] of flights){
            if(distance[u]!= Infinity && distance[u]+c < temp[v]){
                temp[v] = distance[u]+c
            }
        }
        distance = temp;
    }
    return distance[dst] === Infinity ? -1 : distance[dst];
}
