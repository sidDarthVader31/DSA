/**
 * link: https://leetcode.com/problems/word-search/
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    for(let row = 0;row<board.length;row++){
        for(let col=0;col<board[0].length;col++){
            if(board[row][col]==word[0]){//find the starting word
                const hasWord = dfs(board, row, col, word);
                if(hasWord){
                    return true;
                }
            }
        }
    }
    return false;    
};

const dfs = (grid, row, col, word, index = 0) =>{
    //base case 
    if(index == word.length){
        return true;
    }
    if(row < 0 || col <0  || row >= grid.length || col >= grid[0].length 
    || grid[row][col]!= word[index]){
        return false;
    }
    index= index+1;
    let temp = grid[row][col];
    grid[row][col]= '#';
    const found = dfs(grid, row-1,col, word, index)||
    dfs(grid, row, col+1, word, index)|
    dfs(grid, row+1, col, word, index)||
    dfs(grid, row, col-1, word, index);
    grid[row][col] = temp;
    return found;
}

