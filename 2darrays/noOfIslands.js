
/**
 * link: https://leetcode.com/problems/number-of-islands/
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    for(let row =0;row<grid.length;row++){
        for(let col =0;col<grid[0].length;col++){
            if(grid[row][col] == "1"){
                count++;
                dfs(grid, row, col)
            }
        }
    }
      return count;
};
   const dfs = (grid, row=0, col =0) =>{
    if(row <0 || row >= grid.length || col <0|| col >= grid[0].length || grid[row][col] == "0" ){
        return ;
    }
    grid[row][col] = "0";
    //up right down left 
    dfs(grid, row-1, col)
    dfs(grid, row, col+1)
    dfs(grid, row+1, col)
    dfs(grid, row, col-1)
}
