/**
 * link : https://leetcode.com/problems/word-search/description/
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const m = board.length;
    const n = board[0].length;
    const seen = new Array(m).fill(0).map(() => {
        return new Array(n).fill(false)
    })
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const dfs = (row, col, i) => {
        if (row < 0 || col < 0 || row >= m || col >= n 
        || seen[row][col] || board[row][col]!=word[i]) {
            return false
        }
        //base case 
        if (i == word.length - 1 && word[i] == board[row][col]) return true;
        seen[row][col] = true;
        for (const [dr, dc] of directions) {
            const nr = row + dr;
            const nc = col + dc;
            if (dfs(nr, nc, i + 1)) return true;
        }
        seen[row][col]=false
        return false;
    }

    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (board[row][col] == word[0]) {
                if (dfs(row, col, 0)) return true;
            }
        }
    }
    return false;
};
