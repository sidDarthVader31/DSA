/**
 * link: https://leetcode.com/problems/count-complete-tree-nodes/
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
let count = 0;
var countNodes = function(root) {
     count = 0;
     return countNumber(root)
};

var countNumber = function(root) {
    if(!root){
        return count;
    }
    //preorder traversal 
    count = count +1;
    countNumber(root.left, count);
    return countNumber(root.right, count)
}
