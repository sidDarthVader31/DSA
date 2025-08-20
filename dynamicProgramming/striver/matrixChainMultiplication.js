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
}
