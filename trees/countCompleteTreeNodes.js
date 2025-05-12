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
 * @return {number}
 * runs in log n time 
 */
var countNodesOptimized = function(root) {

    if(!root){
        return 0 ;
    }
    let leftHeight =  getHeight(root.left);
    let rightHeight = getHeight(root.right);

    if(leftHeight == rightHeight){
      return (1 << leftHeight) + countNodes(root.right);
    }
    else{
          return (1 << rightHeight) + countNodes(root.left);
    }
};

const getHeight = (root) => {
    let height = 0;
    while(root){
        height++;
        root = root.left;
    }
    return height;
}
