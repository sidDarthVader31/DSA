class Solution {
    /**
     * link: https://www.geeksforgeeks.org/problems/matrix-chain-multiplication0303/1
     * @param {number[]} arr
     * @return {number}
     */
    matrixMultiplication(arr) {
        // code here
        const n = arr.length;
         let dp = new Array(n).fill(0).map(()=>{
             return new Array(n).fill(undefined);
         })
         const f = (i, j) => {
             //f(i,j) -> returns the min no of multiplication fori..j
             if( i==j) return 0;
             
             if(dp[i][j]!= undefined) return dp[i][j];
             let min = Infinity;
             for(let k =i;k<j;k++){
                 let minC = (arr[i-1]*arr[k]*arr[j])+ f(i,k) + f(k+1,j);
                 min = Math.min(min, minC)
             }
            return dp[i][j]= min;
             
         }
         return f(1, n-1);
    }

  //tabulation approach
  matrixMultiplicationTabulation(arr) {
        // code here
        const n = arr.length;
         let dp = new Array(n).fill(0).map(()=>{
             return new Array(n).fill(0);
         })
        // return f(1, n-1);
         
         for (let len = 2; len < n; len++) {  // chain length
        for (let i = 1; i + len - 1 < n; i++) {
            let j = i + len - 1;
            dp[i][j] = Infinity;

            for (let k = i; k < j; k++) {
                let cost = dp[i][k] + dp[k+1][j] + arr[i-1] * arr[k] * arr[j];
                dp[i][j] = Math.min(dp[i][j], cost);
            }
        }
    }
         return dp[1][n-1]
    }
}


/**
 * tabulation approach
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
var minCost = function(n, cuts) {
    cuts = cuts.sort((a,b)=>  a-b);
    cuts = [0,...cuts,n];
    const m = cuts.length;

    const dp = new Array(m).fill(0).map(()=>{
        return new Array(m).fill(0);
    });
    for(let i = m-2;i>=0;i--){
        for(let j = i+1;j<m;j++){
            let min = Infinity;
            for(let k = i+1;k<j;k++){
                let minC = dp[i][k] + dp[k][j] + cuts[j]-cuts[i];
                min = Math.min(min, minC);
            }
            dp[i][j] = min == Infinity ?0: min;
        }
    }
    return dp[0][m-1]
};
