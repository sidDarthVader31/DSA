/**
 * link: https://leetcode.com/problems/clone-graph/description/
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node, visited ={}) {
    if(!node){
        return null;
    }
    if(visited[node.val]){
        return visited[node.val];
    }
    let clone = new _Node(node.val, []);
    visited[node.val] = clone;
    for(const neighbour of node.neighbors){
        const cloned = cloneGraph(neighbour, visited);
        visited[neighbour.val]=cloned;
        if(cloned){
            clone.neighbors.push(cloned);
        }
    }
    return clone;
};
