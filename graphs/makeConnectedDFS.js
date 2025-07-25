
/**
 * link: https://leetcode.com/problems/number-of-operations-to-make-network-connected/
 * make connected solution with dfs 
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {
    if(connections.length < n-1) return -1;
   const graph = new Array(n).fill(0).map(()=> {return []});
   const visited = new Array(n).fill(0);
   for(const [a,b] of connections){
    graph[a].push(b);
    graph[b].push(a)
   }
   let count =0;
   const dfs = (node) =>{
    if(visited[node]){
        return;
    }
    visited[node]=1;
    let edges = graph[node];
    for(const edge of edges) {
       dfs(edge);
    }
   }
   for(let i = 0;i<n;i++){
        if(!visited[i]){
            count++;
            dfs(i)
        }
   }
   return count-1
};          
