/**
 * link; https://leetcode.com/problems/balanced-binary-tree/description/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root, level = 0) {
    if(!root){
        return true;
    }
    level++;
    let leftHeight = getHeight(root.left, level, 0);
    let rightHeight = getHeight(root.right, level, 0);
    if(Math.abs(leftHeight-rightHeight)>1){
        return false;
    }
    else {
        return isBalanced(root.left, level, 0) && isBalanced(root.right, level, 0);
    }
};

const getHeight = function(root, depth = 0, max = 0) {
  if(!root){
    return Math.max(depth, max);
  }
  depth++;
  max = getHeight(root.left, depth, max);
  return getHeight(root.right, depth, max);
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root, level = 0) {
 
    return checkHeight(root) !== -1;
    
};

const checkHeight = function (node) {
    if(!node){
        return 0;
    }

    const lHeight = checkHeight(node.left);
    if(lHeight == -1){
        return -1;
    }
    const rHeight = checkHeight(node.right);
    if(rHeight == -1) return -1;

    if(Math.abs(lHeight-rHeight) > 1) return -1;
    return 1+ Math.max(lHeight, rHeight);
}



