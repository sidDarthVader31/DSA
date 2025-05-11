/**
 * link: https://leetcode.com/problems/binary-tree-right-side-view/description/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideViewBFS = function(root) {
    if(!root){
        return [];
    }
    let output = [];
    let queue = [];
    queue.push(root);
    while(queue.length > 0){
        let size = queue.length;
        for(let i =0;i< size;i++){
            let node = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
            if(i == size-1){
                output.push(node.val)
            }
        }
    }
    return output;
};

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
 * @return {number[]}
 */
var rightSideViewDFS = function(root, output = [], level=0 ) {
    if(!root){
        return output;
    }
    level++;
    if(level > output.length){
      output.push(root.val); 
    }
     rightSideViewDFS(root.right, output, level);
     return rightSideViewDFS(root.left, output, level);
};
