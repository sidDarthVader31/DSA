/**
 * link: https://leetcode.com/problems/knight-probability-in-chessboard/description/
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function(n, k, row, column) {
    if(k ==0) return 1;
    if(n<=2) return 0;
    const directions = [[-2,-1], [-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];
    const memo = new Map()
    const f = (r, c, k) =>{
        const key = `${r}-${c}-${k}`
        //f(r,c,k) -> probability of knight at r,c to make k steps and stay on board 
        if(r<0 || c <0 || r>=n || c >=n){
            return 0; //went out 
        }
        if(k==0) return 1;
        if(memo.get(key)!=undefined) return memo.get(key)
        let probability = 0;
        for(const [dr,dc] of directions){
            let nr = r+dr;
            let nc = c+dc;
            if(nr<0 || nc <0 || nr >=n || nc >=n)continue;
            probability = probability +f(nr,nc,k-1);
        }
         memo.set(key,probability/8);
        return probability/8;
    }
    return f(row,column,k)
};


// 00 01 02
// 10 11 12
// 20 21 22
