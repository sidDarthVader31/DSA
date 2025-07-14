/**
 * link: https://leetcode.com/problems/rotting-oranges/description/
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let freshOrange = 0;
    let queue = [];
    for(let row =0; row <grid.length;row++){
        for(let col=0; col< grid[0].length;col++){
            if(grid[row][col]==1){
                freshOrange++;
            }
            else if(grid[row][col]==2){
                queue.push([row,col]);
            }
        }
    }
    if(freshOrange == 0 ){
        return 0;
    }
    if(queue.length ==0){
        return -1;
    }
    return bfs(grid, queue,freshOrange)
}

const bfs = (grid, queue, freshCount ) =>{
    let count = 0;
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
   while (queue.length > 0) {
    let qLength = queue.length; // number of oranges to process at this minute
    let rotted = false;
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
                grid[newRow][newCol] = 2;
                queue.push([newRow, newCol]);
                freshCount--;
                rotted = true;
            }
        }
    }

    if (rotted) count++;
}
   // console.log(`count minutes:`, count)
    return freshCount == 0 ? count: -1;
}
