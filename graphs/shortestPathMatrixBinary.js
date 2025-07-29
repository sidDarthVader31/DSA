/**
 * link: https://leetcode.com/problems/shortest-path-in-binary-matrix/description/
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    const directions = [[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1]]
    let visited = new Array(grid.length).fill(0).map(()=>{
        return new Array(grid[0].length).fill(0)
    });
    let queue = [];
    queue.push([0,0,1]);
    while(queue.length >0){
        const [row,col, dist] = queue.shift();
        if(row <0 || col<0 || row>= grid.length || col >= grid[0].length
        || grid[row][col]==1 || visited[row][col]){
            continue;
        }
        if(row == grid.length-1 && col == grid[0].length-1) return dist;
        visited[row][col]=1;

        for(const [dr,dc] of directions){
            let nr = row+dr;
            let nc = col+dc;
            queue.push([nr,nc,dist+1]);
        }
    }
    return -1;
};


/**
 * shortest path optimized - adding only valid values to
 * the queue
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    if(grid[0][0]!=0 || grid[grid.length-1][grid.length-1]!=0){
        return -1;
    }
    const directions = [[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1]]
    let visited = new Array(grid.length).fill(0).map(()=>{
        return new Array(grid[0].length).fill(0)
    });
    let queue = [];
    queue.push([0,0,1]);
    visited[0][0]=1;
    while(queue.length >0){
        const [row,col, dist] = queue.shift();
        if(row == grid.length-1 && col == grid[0].length-1) return dist;
        for(const [dr,dc] of directions){
            let nr = row+dr;
            let nc = col+dc;
            if(nr >=0 && nc>=0 && nr < grid.length && nc < grid.length &&
            grid[nr][nc]==0 && !visited[nr][nc]){
                visited[nr][nc]=1;
                queue.push([nr,nc,dist+1]);
            }
          
        }
    }
    return -1;
};
