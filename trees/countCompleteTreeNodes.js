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
        console.log(`count at end:${count}`)
        return count;
    }
    //preorder traversal 
    count = count +1;
    console.log(`at node:${root.val}, count:${count}`)
     countNumber(root.left, count);
    return countNumber(root.right, count)
}
