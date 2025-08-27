/**
 * link : https://leetcode.com/problems/permutations/submissions/1750264524/
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let output = [];
    let path = [];
    nums= nums.sort((a,b)=> a-b);
    const used = new Array(nums.length).fill(false);

    const dfs = ()=> {
        if(path.length == nums.length){
            output.push([...path]);
            return;
        }
        for(let i = 0;i<nums.length;i++){
            if(used[i]) continue;
            path.push(nums[i]);
            used[i]= true;
            dfs();
            path.pop();
            used[i]= false;
        }
    }
    dfs()
    return output;
};
