
/**
 * link: https://leetcode.com/problems/sudoku-solver/
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    const isValid = (row, col, char) =>{
        for(let i =0;i<9;i++){
            if(board[row][i]==char) return false;
            if(board[i][col]==char) return false;
            const boxRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
            const boxCol = 3 * Math.floor(col / 3) + (i % 3);
            if (board[boxRow][boxCol] === char) return false;
        }
        return true;
    }

    const solve = () =>{
        for(let row=0;row <9;row++){
            for(let col=0;col<9;col++){
                if(board[row][col]=='.'){
                    //try fitting all available options 
                    for(let i =1;i<=9;i++){
                        if(isValid(row, col, `${i}`)){
                            //mutate 
                            board[row][col] =`${i}`;
                            if(solve()) return true;
                            
                            //backtrack
                            board[row][col]='.';
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }
    solve()
}

