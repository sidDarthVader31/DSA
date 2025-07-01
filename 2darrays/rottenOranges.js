/**
 * link: https://leetcode.com/problems/rotting-oranges/
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let seen = new Array(grid.length).fill(0).map(()=>{
        return new Array(grid[0].length).fill(0)
    });
    let freshCount = 0;
    let queue = [];
    for(let row =0;row< grid.length;row++){
        for(let col=0;col< grid[0].length;col++){
            if(grid[row][col]==2){
                queue.push([row,col])
            }
            else if(grid[row][col]==1){
                freshCount++;
            }
        }
    }
    if(freshCount == 0){
        return 0
    }
    if(queue.length ==0){
        return -1;
    }
    //console.log(`fresh Count:`, freshCount)
    return bfs(queue, grid,seen, freshCount);
};

const bfs = (queue, grid,seen, freshCount) =>{
    let count = 0;
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
   while (queue.length > 0) {
    let qLength = queue.length; // number of oranges to process at this minute
    let rottedThisMinute = false;
    for (let i = 0; i < qLength; i++) {
        let [row, col] = queue.shift();
        for (let [dx, dy] of directions) {
            let newRow = row + dx;
            let newCol = col + dy;

            if (
                newRow >= 0 && newCol >= 0 &&
                newRow < grid.length && newCol < grid[0].length &&
                grid[newRow][newCol] === 1
            ) {
                grid[newRow][newCol] = 2;  // mutate grid directly
                queue.push([newRow, newCol]);
                freshCount--;
                rottedThisMinute = true;
            }
        }
    }

    if (rottedThisMinute) count++;
}
  //  console.log(`count minutes:`, count)
    return freshCount == 0 ? count: -1;
}
