/**
 * link: https://www.geeksforgeeks.org/problems/rat-in-a-maze-problem/1&selectedLang=python3
 * @param number[][] mat
 * @returns string[]
 */
class Solution {
    // Function to find all possible paths
    ratInMaze(maze) {
        // code here
        let res = [];
        const n = maze.length-1;
        let seen = new Array(maze.length).fill(0).map(()=>{
            return new Array(maze[0].length).fill(0);
        });
        const directions = [[-1,0,'U'],[0,1,'R'],[1,0,'D'],[0,-1,'L']];
        
        const dfs = (row, col, path) =>{
            
            if(row <0 || col <0 || row >= maze.length || col >= maze[0].length){
                return;
            }
            if(maze[row][col]==0 || seen[row][col]){
                return;
            }
            seen[row][col]=1;
            if(row == n && col == n){
                //we have reached the end 
                res.push(path);
                  seen[row][col]=0;
                return;
            }
            for(const [dr,dc, dp] of directions) {
                let nr = row+dr;
                let nc = col+dc;
                dfs(nr,nc, path+dp);
            }
            seen[row][col]=0;
        };
        dfs(0,0,'')
        return res.sort();
        
    }
}
