/**
 * @param number[][] mat
 * @returns string[]
 */
class Solution {
    // Function to find all possible paths
    ratInMaze(maze) {
        // code here
        const n = maze.length;
        const seen = new Array(n).fill(0).map(()=>{
            return new Array(n).fill(0)
        });
        const directions = [[-1,0,'U'],[1,0,'D'],[0,-1,'L'],[0,1,'R']];
        const result = [];
        const dfs = (row, col, path) => {
            if(row <0 || col<0 || row >= n || col >=n || maze[row][col]==0||
            seen[row][col]==1){
                return
            }
            seen[row][col]=1;
            if(row==n-1 && col == n-1){
                result.push(path);
                seen[row][col]=0; //for other paths to traverse
                return;
            }
            for(const [dr,dc, dp] of directions) {
                let nr = row +dr;
                let nc = col+dc;
                let np = path+dp;
                dfs(nr, nc, np);
            }
            seen[row][col]=0; // backtracking to take another path
        }
        dfs(0,0,'');
        return result.sort();
    }
}
