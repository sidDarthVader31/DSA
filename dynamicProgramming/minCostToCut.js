/**
 * link : https://leetcode.com/problems/minimum-cost-to-cut-a-stick/description/
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
var minCost = function(n, cuts) {
    
    let dp = new Array(n+1).fill(0).map(()=>{
        return new Array(n+1).fill(undefined)
    });
    cuts = cuts.sort((a, b) => a-b)
    const f = (i,j) => {
        if (j==i) return 0;
        if(dp[i][j]!= undefined) return dp[i][j];
        let cost = j-i;
        let min = Infinity;
        for(let k=0;k<cuts.length;k++){
            let pos = cuts[k]
            if(pos <=i || pos >=j) continue;
            let mink = f(i, pos)+ f(pos,j);
            min = Math.min(min, (mink+cost));
        }
        return dp[i][j] = (min== Infinity ?0:min);
    }
    return f(0, n);
};


/** memoization scalable approach
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
var minCost = function(n, cuts) {
    cuts = cuts.sort((a,b)=>  a-b);
    cuts = [0,...cuts,n];
    const m = cuts.length;

    const dp = new Array(m).fill(0).map(()=>{
        return new Array(m).fill(undefined);
    });
    const f = (i,j) => {
        //f(i,j) = min no of cost of cutting from i to j 
        if(j== i+1) return 0;
        if(dp[i][j]!= undefined) return dp[i][j];
        let min = Infinity;
        for(let k = i+1;k<j;k++){
            let minC = f(i,k) + f(k,j) + cuts[j]-cuts[i]
            min = Math.min(min, minC);
        }
        return dp[i][j] = min;
    }
    return f(0, m-1);
};
