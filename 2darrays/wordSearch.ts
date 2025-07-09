export  function exist(board: string[][], word: string): boolean {
    for(let row = 0;row<board.length;row++){
        for(let col=0;col<board[0].length;col++){
            if(board[row][col]=== word[0]){
                if(dfs(board, row, col, word, 0)){
                    return true;
                }
            }
        }
    }
    return false;
};

function dfs(board:string[][], row: number, col: number, word: string, index: number): boolean {
    if(index == word.length){
        return true;
    }
    if(row<0|| col <0 || row>=board.length || col >=board[0].length ||
    board[row][col]!=word[index] ){
        return false;
    }
    let temp = board[row][col];
    board[row][col]='#';
    index = index+1;
    const flag = dfs(board, row-1, col, word, index)||
    dfs(board, row, col+1, word, index)||
    dfs(board, row+1, col, word, index)||
    dfs(board, row, col-1, word, index)
     if(!flag){
        board[row][col]= temp;
     }
     return flag;
}
