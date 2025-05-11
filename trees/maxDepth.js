/**
 * link:https://leetcode.com/problems/maximum-depth-of-binary-tree/
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
var maxDepth = function(root, depth = 0, max = 0) {
    if(root == null){
        return Math.max(depth, max);
    }
    depth++;
    max = Math.max(depth, max)
    max =  maxDepth(root.left, depth, max);
    return maxDepth(root.right, depth, max)
};
