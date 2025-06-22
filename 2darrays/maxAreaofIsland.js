/**
 * link:
 * https://leetcode.com/problems/max-area-of-island/description/
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let maxArea  = 0;
    let seen = new Array(grid.length).fill(0).map(()=>{
        return new Array(grid[0].length).fill(0)
    });
    for(let row = 0;row< grid.length;row++){
        for(let col=0;col< grid[0].length;col++){
          if(grid[row][col] == 0){
            continue;
          }
            let area = dfs(grid, row, col, seen);
            maxArea = Math.max(area, maxArea);
        }
    }
    return maxArea;
};

const dfs = (grid, row, col, seen) =>{
    if(row<0 || row >=grid.length || col<0 || col>=grid[0].length 
    || seen[row][col] || grid[row][col] == 0){
        return 0;
    }
    seen[row][col]=1;
    return dfs(grid, row-1, col, seen) +
    dfs(grid, row, col+1,seen) +
    dfs(grid, row+1, col, seen) +
    dfs(grid, row, col-1, seen) +1;
}

//1. Minimum Window Substring , Palindrome Partitioning
