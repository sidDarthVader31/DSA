/**
link : https://leetcode.com/problems/binary-tree-maximum-path-sum/
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
    if(!root) return 0;
    let max = root.val
    const f = (head) => {
        //f(i) -> maximum path sum of root head

        if(!head) return 0;
        let leftSum = Math.max(0, f(head.left))
        let rightSum = Math.max(0, f(head.right));
        max = Math.max(
            max, 
            leftSum+rightSum+ head.val
        )
        return Math.max(leftSum, rightSum) + head.val;
    }
    f(root)
    return max;
};
