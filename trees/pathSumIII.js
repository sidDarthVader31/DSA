/**
 * link: https://leetcode.com/problems/path-sum-iii/description/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
   const prefixMap = { 0: 1 };
    return prefixSum(root, targetSum, 0 ,prefixMap);
}
const prefixSum = (root, targetSum, sum , map) =>{
    if(!root){
        return 0;
    }
    sum = sum + root.val
    let count = map[sum-targetSum] || 0
    map[sum] = (map[sum]|| 0) + 1;
    count = count + prefixSum(root.left, targetSum, sum, map);
    count = count + prefixSum(root.right, targetSum, sum, map);
    map[sum]--;
    return count;
}
