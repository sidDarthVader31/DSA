/**
 * link:https://leetcode.com/problems/diameter-of-binary-tree/
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
var diameterOfBinaryTree = function(root) {
    if(!root) return 0;
    let max = 0;

    const f = (node) => {
        // returns max path from node to end (either left or right)

        if(!node) return 0;
        let left= f(node.left);
        let right =f(node.right);

        max = Math.max(max, 1+ left+right);

        return Math.max(left, right) + 1 ;
    }
    f(root)
    return max-1
};

