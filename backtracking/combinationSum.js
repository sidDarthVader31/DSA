/**
 * link : https://leetcode.com/problems/combination-sum/description/
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [];
    let path = [];

    const dfs = (start, remaining) => {
        if(remaining == 0){
            result.push([...path]);
            return;
        }
        for(let i = start;i< candidates.length;i++){
            if(candidates[i]> remaining) continue;
            path.push(candidates[i]);
            dfs(i, remaining-candidates[i]);
            path.pop();

        }
    } 
    dfs(0, target);
    return result 
};
