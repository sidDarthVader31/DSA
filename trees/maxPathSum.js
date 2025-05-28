/**
 * link: https://leetcode.com/problems/binary-tree-maximum-path-sum/description/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let max = root.val;
    const getSum = (node) =>{
        if(!node){
            return 0;
        }
        let leftSum = Math.max(0, getSum(node.left));
        let rightSum = Math.max(0, getSum(node.right))

        max = Math.max(max, (leftSum+rightSum+node.val));
        return Math.max(leftSum, rightSum) + node.val;
    }
    getSum(root);
    return max;
};
