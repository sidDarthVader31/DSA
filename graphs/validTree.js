// link : https://neetcode.io/problems/valid-tree
class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
      const adj = Array.from({length: n}, ()=>[]);
      const visited = new Set();

      //create adjacency matrix 

      for(const [u,v] of edges){
        adj[u].push(v);
        adj[v].push(u);
      }


      const dfs = (node, parent) =>{
        if(visited.has(node)){
          return false;
        }
        visited.add(node);
        for(const edge of adj[node]){
          if(edge == parent){
            //ignore 
            continue;
          }
          if(!dfs(edge, node))return false;
        }
        return true;
      }
      return dfs(0,-1) && visited.size == n;
    }
}

