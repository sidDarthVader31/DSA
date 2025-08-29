/**
*link: https://leetcode.com/problems/n-queens/
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    let output = new Array(n).fill(0).map(() => {
        return new Array(n).fill(".")
    });
    const validate = (i, j) => {
        for (let k = 0; k < n; k++) {
            //not same row 
            if (output[i][k] == 'Q') {
                return false;
            }
            //not same column
            if (output[k][j] == 'Q') {
                return false
            }
        }

        //up and left
        let row = i;
        let col = j
        while (row >= 0 && col >= 0) {
            if (output[row][col] == 'Q') return false;
            row--;
            col--;
        }
        //up and right 
        row = i;
        col = j;
        while (row >= 0 && col < n) {
            if (output[row][col] == 'Q') return false;
            row--;
            col++
        }
        //down and left 
        row = i;
        col = j;
        while (row < n && col >= 0) {
            if (output[row][col] == 'Q') return false;
            row++;
            col--
        }
        row = i;
        col = j
        //down and right
        while (row < n && col < n) {
            if (output[row][col] == 'Q') return false;
            row++;
            col++
        }
        return true
    }
    const result = [];
    const solve = (row ) => {
        if (row == n) {
            const data = output.map((row) => {
                return row.join('');
            });
            result.push([...data]);
            return ;
        }
        for(let col = 0;col<n;col++){
            if(validate(row, col)){
                output[row][col]='Q';
                solve(row+1);
                output[row][col]='.'
            }
        }
    }

    solve(0);
    return result;
};


