/**
 * link: https://leetcode.com/problems/redundant-connection/description/
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
     const graph = new Map();

    const dfs = (src, dst, visited) => {
        if (src === dst) return true;
        visited.add(src);
        for (const neighbor of (graph.get(src) || [])) {
            if (!visited.has(neighbor)) {
                if (dfs(neighbor, dst, visited)) return true;
            }
        }
        return false;
    };

    for (const [u, v] of edges) {
        const visited = new Set();
        if (graph.has(u) && graph.has(v) && dfs(u, v, visited)) {
            return [u, v]; // This edge introduces a cycle
        }

        // Add edge to graph (undirected)
        if (!graph.has(u)) graph.set(u, []);
        if (!graph.has(v)) graph.set(v, []);
        graph.get(u).push(v);
        graph.get(v).push(u);
    }

    return [];
};
