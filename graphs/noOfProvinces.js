/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let count = 0;
   let visited = new Array(isConnected.length).fill(false);
    for(let row = 0;row< isConnected.length;row++){
        if(!visited[row]){
            count++;
            dfsAdjMatrix(row,isConnected,visited)
        }
    }
    return count;
};

function dfsAdjMatrix(node, adjMatrix, visited) {
    if (visited[node]) return;
    visited[node] = true;
    for (let neighbor = 0; neighbor < adjMatrix.length; neighbor++) {
        if (adjMatrix[node][neighbor] == 1 && !visited[neighbor]) {
            dfsAdjMatrix(neighbor, adjMatrix, visited);
        }
    }
}
