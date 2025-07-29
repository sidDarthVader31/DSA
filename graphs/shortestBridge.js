/**
 * link : https://leetcode.com/problems/shortest-bridge/
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function(grid) {
       let visited = new Array(grid.length).fill(0).map(()=>{
        return new Array(grid[0].length)
    })
    updateGrid(grid, visited)
    let result =Infinity;
    for(let row =0;row<grid.length;row++){
        for(let col=0;col<grid[0].length;col++){
             //console.log(`checking for row:${row}, col:${col}`)
            if(grid[row][col]==1){
                const dist =  bfs(row,col, grid);
              //  console.log(`for row:${row}, col:${col}, dist:`, dist)
                if(dist!=undefined){
                    result = Math.min(result,dist)
                }
            }
        }
    }
    return result
};

const updateGrid = (grid, visited) =>{
    for(let row =0;row < grid.length;row++){
        for(let col =0;col< grid[0].length;col++){
            if(grid[row][col]==1){
                dfs(row, col, grid, visited);
                return;
            }
        }
    }
}
const bfs = (r, c, grid) =>{
    let visited = new Array(grid.length).fill(0).map(()=>{
        return new Array(grid[0].length).fill(0)
    });
    let queue = [];
    const directions = [[-1,0],[0,1],[1,0],[0,-1]];
      for(const [dr,dc] of directions){
            let nr = r+dr;
            let nc = c+ dc;
            queue.push([nr,nc,0])
        }
    while(queue.length >0){
        const [row, col, dist] = queue.shift();
        if(row<0 || col<0 || row >= grid.length || col >= grid[0].length
        || visited[row][col] || grid[row][col]==1){
            continue;
        }
        visited[row][col]=1;
        if(grid[row][col]=='#'){
            return dist;
        }
        for(const [dr,dc] of directions){
            let nr = row+dr;
            let nc = col+ dc;
            queue.push([nr,nc,dist+1])
        }
    }
}
const dfs = (row, col, grid, visited) =>{
    if(row <0 || col <0 || row >= grid.length || col >= grid[0].length || 
    grid[row][col]==0 || visited[row][col]){
        return;
    }
    visited[row][col]=1;
    grid[row][col]='#';
    dfs(row-1,col, grid, visited)
    dfs(row+1, col, grid, visited)
    dfs(row, col-1, grid, visited)
    dfs(row, col+1, grid, visited);
}
