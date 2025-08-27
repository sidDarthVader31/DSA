/**
 * link : https://leetcode.com/problems/subsets-ii/
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums = nums.sort((a,b)=> a-b);
    const res = [];
    const path = [];
    const map = {};

    const dfs = (start) => {
        if(!map[[...path]]){
            res.push([...path]);
            map[[...path]] =1;
        }

        for(let i = start;i<nums.length;i++){
            path.push(nums[i]);
            dfs(i+1);
            path.pop();
        }
    }
    dfs(0)
    return res;
};
