/**
 * link : https://leetcode.com/problems/combination-sum-ii/description/
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const n = candidates.length;
    candidates = candidates.sort((a,b)=> a-b)
    const result = [];
    let sum = 0;
    const path = [];

    const dfs = (start) => {
        if(sum == target){
             result.push([...path]);
             return;
        }
        for(let i = start;i< n;i++){
            if(candidates[i]> target-sum){
                continue;
            }
            if(i> start && candidates[i]== candidates[i-1])continue;
            sum = sum + candidates[i];
            path.push(candidates[i])
            dfs(i+1);
            path.pop()
            sum = sum - candidates[i]
        }
    }
    dfs(0)
    return result;
};
