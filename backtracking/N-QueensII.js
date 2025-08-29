/**
 * link : https://leetcode.com/problems/n-queens-ii/
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let output = Array.from({length:n}, ()=> '.'.repeat(n))
    let count = 0;

    const solve = (row, cols = new Set(), diag1 = new Set(), diag2 = new Set())=> {
        if(row == n){
            count++;
            return;
        }
        for(let col =0;col<n;col++){
            if(cols.has(col) || diag1.has(row-col)|| diag2.has(row+col))continue;
            output[row]= output[row].substring(0,col)+'Q'+ output[row].substring(col+1);
            cols.add(col)
            diag1.add(row-col)
            diag2.add(row+col);

            solve(row+1, cols, diag1, diag2);
            //backtrack 
            cols.delete(col)
            diag1.delete(row-col)
            diag2.delete(row+col)
        }
    }
    solve(0)
    return count;
};
