/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    const n = matrix.length;
    const dp = new Map();
    const f = (i,j) => {
        // minimum path sum required to travel from first row to i,j;
        if(i<0 ||j <0 || i>=n || j>=n) return Infinity;
        if(i==0){
            return matrix[i][j];
        }
        const key = `${i}-${j}`;
        if(dp.has(key)) return dp.get(key);
        let min =  matrix[i][j] + Math.min(
            f(i-1, j),
            f(i-1, j-1),
            f(i-1, j+1)
        );
        dp.set(key, min);
        return min;
    }
    let min = Infinity;
    for(let i = 0;i< n;i++) {
        min = Math.min(min, f(n-1, i))
    }
    return min;
};
