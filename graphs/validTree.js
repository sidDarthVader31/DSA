// link : https://neetcode.io/problems/valid-tree
class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        const adj = Array.from({ length: n }, () => []);

    // Build adjacency list
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u); // because it's undirected
    }
       const visited = new Array(n).fill(false);

    const dfs = (node, parent) =>{
        visited[node]= true;
        const children = adj[node];
        for(const neighbor of children){
          if (!visited[neighbor]) {
                if (!dfs(neighbor, node)) return false;
            } else if (neighbor !== parent) {
                // Cycle detected
                return false;
            }
        }
        return true;
        }
        if (!dfs(0, -1)) return false;
        return visited.every(v => v);
    }
}

