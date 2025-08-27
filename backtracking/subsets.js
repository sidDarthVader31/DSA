/**
 * link: https://leetcode.com/problems/subsets/description/
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  nums.sort((a, b) => a - b);
  const res = [], path = [];

  const backtrack = (start) => {
    res.push([...path]);
    for(let i= start;i< nums.length;i++){
        path.push(nums[i]);
        backtrack(i+1);
        path.pop()
    }
  }
  backtrack(0)
  return res;
};
