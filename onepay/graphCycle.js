// Service Dependency Graph (Graphs + BFS/DFS)
//
// Problem:
// You have n microservices represented as a directed graph (edges are dependencies).
// Write a function to detect if there is a cycle in the dependencies (which would prevent deployment).
//
// Example:
//
// Input: n=3, edges=[[0,1],[1,2],[2,0]]  
// Output: true   (cycle exists: 0→1→2→0)

const hasCycle = (n, edges) => {

  const graph = Array.from({length:n}, ()=> []);

  for (const [u,v] of edges) {
    graph[u].push(v);
  }

  const visited = new Set();
  const revisit = new Set();

  const dfs = (i) => {
    if(revisit.has(i)) return true;
    if(visited.has(i)) {
      return false;
    }
    visited.add(i)
    revisit.add(i);

    for(const neighbour of graph[i]){
      if(dfs(neighbour)) return true;
    }
    revisit.delete(i);
    return false;
  }
  for(let i = 0;i< n;i++){
    if(dfs(i)) return true;
  }
  return false;
}
console.log(hasCycle(3, [[0,1],[1,2],[2,0]])); // true (cycle)
console.log(hasCycle(4, [[0,1],[1,2],[2,3]])); // false (no cycle)
console.log(hasCycle(3, [[0,1],[1,2]]));       // false())
