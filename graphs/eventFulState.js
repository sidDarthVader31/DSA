
/**
 * link: https://leetcode.com/problems/find-eventual-safe-states/description/
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
   let result = [];
   let visited = new Array(graph.length).fill(0)
   const dfs = (node) =>{
    if(visited[node]==1){
        return false ; //has cycle
    }
    if(visited[node]==2){
        return true;
    }
    visited[node] =1;
    for(const neighbour of graph[node]){
        if(!dfs(neighbour)) return false;
    }
    visited[node]=2;
    return true
   }
   for(let i = 0;i< graph.length;i++){
    if(dfs(i)) result.push(i)
   }
   return result;
};
