
/**
 * link : https://leetcode.com/problems/sudoku-solver/submissions/1750071591/
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    const rowMap = Array.from({length: 9}, () => ({}));
    const colMap = Array.from({length: 9}, () => ({}));
    const boxMap = Array.from({length: 9}, () => ({}));
    for(let i = 0;i< 9;i++){
        for(let j = 0;j<9;j++){
            if(board[i][j]!='.'){
                const val= board[i][j]
                rowMap[i][val] = true;
                colMap[j][val] = true;
                boxMap[getBoxId(i,j)][val] = true;
            }
        }
    }

     const isValidBoard = (row, col, val) => {
        // return !rowMap[row][val] &&
        //        !colMap[col][val] &&
        //        !boxMap[getBoxId(row, col)][val];

        if(rowMap[row][val] || colMap[col][val] || boxMap[getBoxId(row ,col)][val]){
            return false;
        }
        return true;
    };
    const solve = () => {
        for(let i =0;i< 9;i++){
            for(let j = 0;j<9;j++){
                if(board[i][j]!='.')continue;
                for(let val= 1;val<=9;val++){
                    if(isValidBoard(i,j,`${val}`)){
                        board[i][j]=`${val}`;
                        rowMap[i][val]=true;
                        colMap[j][val]=true;
                        boxMap[getBoxId(i,j)][val]=true;
                        if(solve()) return true;
                        //backtrack 
                         board[i][j]='.'
                        delete rowMap[i][val];
                        delete colMap[j][val];
                        delete boxMap[getBoxId(i,j)][val];
                    }
                }
               return false;
            }
        }
        return true;
    };
    solve();
    return board;
}


const getBoxId = (row, col) => {
    const colId = Math.floor(col/3);
    const rowId = Math.floor(row/3) * 3;
    return rowId + colId;
}

