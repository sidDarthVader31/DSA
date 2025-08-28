/**
 * link : https://leetcode.com/problems/combination-sum-iii/
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let result = [];
    let path = [];

    const dfs = (start, count, remaining) => {
        if(count == 0 && remaining == 0) {
            result.push([...path]);
        }
        for(let i =start;i<=9;i++){
            if(i > remaining) continue;
            path.push(i);
            count = count -1
            dfs(i+1, count, remaining - i);
            path.pop()
            count= count + 1
        }
    }
    dfs(1, k, n)
    return result
};
