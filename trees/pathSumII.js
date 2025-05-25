/**
 * link: https://leetcode.com/problems/path-sum-ii/description/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    const output = [];
   const getPath = function(root, targetSum, curr =[]) {
    if(!root) {
        return ;
    }
    curr.push(root.val);
    if(!root.left && !root.right && targetSum == root.val){
        //achieved targetSUm
        output.push(curr);
        curr=[];
        return output;
    }
    else if(!root.left && !root.right && targetSum != root.val){
        return ;
    }
    getPath(root.left, targetSum-root.val, [...curr]);
    return getPath(root.right, targetSum-root.val, [...curr])
}
        getPath(root, targetSum, [])
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
 * @param {number} targetSum
 * @return {number[][]}
 * this solution beats 100% in time and space
 */
var pathSumWithBackTracking = function(node, targetSum) {
 const output = [];
 const getPath = (root, targetSum, curr, sum = 0) =>{
    if(!root){
        return;
    }
    sum = sum + root.val;
    curr.push(root.val);
    if(!root.left && !root.right && sum == targetSum){
        output.push([...curr]);
    }
    getPath(root.left, targetSum, curr, sum);
    getPath(root.right, targetSum, curr, sum);
    curr.pop();

 }
 getPath(node, targetSum, []);
 return output
}; 



