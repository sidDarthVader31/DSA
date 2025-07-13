/**
 * link : https://leetcode.com/problems/find-if-path-exists-in-graph/
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    const graph = buildGraph(n, edges);
    return dfs(source, graph, destination, {})

};

function buildGraph(n, edges) {
    const graph = Array.from({ length: n }, () => []);

    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u); // because it's undirected
    }

    return graph;
}

const dfs = (vertex, edges, destination, seen) =>{
    if(vertex == destination) {
        return true;
    }

    seen[vertex] = true;
    let list = edges[vertex];
    for(let i = 0;i< list.length;i++){
        if(!seen[list[i]] && dfs(list[i], edges, destination, seen)){
            return true;
        }
    }
    return false;
}

