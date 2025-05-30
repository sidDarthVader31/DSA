/**
 * link:https://leetcode.com/problems/binary-tree-level-order-traversal/description/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root){
        return [];
    }
    let level = [];
    let output = [];
    let queue = [];
    queue.push(root);
    queue.push(null);

    while(queue.length >0) {
        let curr = queue.shift();
        if(curr){
            level.push(curr.val);
            if(curr.left){
                queue.push(curr.left);
            }
            if(curr.right){
                queue.push(curr.right);
            }
        }
        else {
            output.push(level);
            level = [];
            if(queue.length >0){
                queue.push(null);
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
 * @return {number[][]}
 */
var levelOrderCleaner = function(root) {
    if(!root){
        return [];
    }
    //let level = [];
    let output = [];
    let queue = [];
    queue.push(root);

    while(queue.length >0){
        let level = [];
        let size = queue.length
        for(let i = 0;i< size;i++){
            let current = queue.shift();
            level.push(current.val);
            if(current.left)queue.push(current.left);
            if(current.right)queue.push(current.right);
        }
        output.push(level);
    }
    return output;
};
