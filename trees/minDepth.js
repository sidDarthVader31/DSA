/**
 * link: https://leetcode.com/problems/minimum-depth-of-binary-tree/description/
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
var minDepth = function(root, depth = 0, min=Infinity) {
  return minCheck(root, root, depth, min)
};


var minCheck = function(node, root, depth=0, min= Infinity) {
     if(!node){
        return depth;
    }
    depth++;
    if(node.right && node.left){
        min = minCheck(node.left, root, depth, min);
        return minCheck(node.right, root, depth, min);
    }
    else if(node.right && !node.left){
        return minCheck(node.right, root, depth, min);
    }
    else if(node.left && !node.right){
        return minCheck(node.left, root, depth, min);
    }
    else {
        return Math.min(depth, min);
    }
    // min = minDepth(node.left, depth, min);
    // return minDepth(node.right, depth, min);
}
