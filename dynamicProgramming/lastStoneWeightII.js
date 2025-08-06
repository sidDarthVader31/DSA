/**
 * link: https://leetcode.com/problems/last-stone-weight-ii/description/
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
    let n = stones.length;
    let total =0;
    for(const stone of stones){
        total = total+ stone
    }
    let memo = {};

    const f = (i, sum) =>{
        const key = `${i},${sum}`;
        if(i==-1) return Math.abs(total - 2*sum);
        if(memo[key]!= undefined) return memo[key];
        let take = f(i-1, sum + stones[i])
        let skip = f(i-1, sum);
        return memo[key] = Math.min(take, skip);
    }
    return f(stones.length-1,0);
};
