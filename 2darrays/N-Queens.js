/**
 * link: https://leetcode.com/problems/n-queens/description/
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
     const res = [];
    const board = Array.from({ length: n }, () => '.'.repeat(n));

    const backtrack = (rows, cols = new Set(), diag1 = new Set(), diag2 = new Set())=>{
        if(rows == n){
            res.push([...board]);
            return;
        }
        for(let col=0;col<n;col++){
            if(cols.has(col) || diag1.has(rows-col)|| diag2.has(rows+col)){
                continue;
            }
            //place the queen 
            board[rows]= board[rows].substring(0,col)+ "Q"+ board[rows].substring(col+1);
            cols.add(col);
            diag1.add(rows-col);
            diag2.add(rows+col);
            backtrack(rows+1,cols,diag1,diag2);

            board[rows] = board[rows].substring(0, col) + '.' + board[rows].substring(col + 1);
            cols.delete(col);
            diag1.delete(rows - col);
            diag2.delete(rows + col);
        }
    }
    backtrack(0);
    return res
};
