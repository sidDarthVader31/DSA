/**
 * link : https://leetcode.com/problems/permutations-ii/submissions/1750275765/
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    nums = nums.sort((a, b)=> a-b);
    const output = [];
    const path = [];
    const used = new Array(nums.length).fill(false);
    const dfs = ()=> {
        if(path.length == nums.length){
            output.push([...path]);
            return;
        }
        for(let i = 0;i< nums.length;i++){
            if(used[i])continue;
            if(i >0 && nums[i]== nums[i-1] && ! used[i-1])continue;
            path.push(nums[i]);
            used[i] = true;
            dfs(i);
            path.pop();
            used[i]= false;
        }
    }
    dfs(0);
    return output;
};
