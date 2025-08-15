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


/**
 * tabulation approach
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    const n = matrix.length;
    const dp = new Array(n).fill(0).map(()=>{
        return new Array(n).fill(Infinity)
    });

    for(let i = 0;i<n;i++){
        dp[n-1][i] = matrix[n-1][i];
    }

    for(let i=n-2;i>=0;i--){
        dp[i][0] = matrix[i][0] + Math.min(
            dp[i+1][0],
            dp[i+1][1]
        );
        for(let j=1;j<n-1;j++){
            dp[i][j] = matrix[i][j] + Math.min(
                dp[i+1][j],
                dp[i+1][j-1],
                dp[i+1][j+1]
            );
        }
        dp[i][n-1] = matrix[i][n-1] + Math.min(
            dp[i+1][n-1],
            dp[i+1][n-2]
        )
    }
       //console.log(`dp:`, dp);
    return Math.min(...dp[0])
};
