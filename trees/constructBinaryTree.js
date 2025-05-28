/**
 * link: https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
 * construct a binary tree from inorder and preorder
 * traversal
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  let map = {}
  for(let i =0;i< inorder.length;i++){
    map[inorder[i]] = i;
  }
  let index  = 0;

  const build = (startIndex, endIndex)=>{
    if(startIndex > endIndex){
        return null;
    }
    let inorder = preorder[index++];
    let root = new TreeNode(inorder);
    let rootIndex = map[inorder];
    root.left = build(startIndex, rootIndex-1);
    root.right = build(rootIndex+1, endIndex);
    return root;
  }
  return build(0, inorder.length-1)
};
