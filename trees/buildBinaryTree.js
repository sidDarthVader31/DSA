/**
 * link: https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */// 3 20 7 15 9 
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
if (!inorder.length || !postorder.length) return null;
    
    // Create hashmap for O(1) lookup of indices in inorder array
    const inorderMap = new Map();
    for (let i = 0; i < inorder.length; i++) {
        inorderMap.set(inorder[i], i);
    }
    
    function build(inStart, inEnd, postStart, postEnd) {
        if (inStart > inEnd || postStart > postEnd) return null;
        
        // Last element in postorder is always the root
        const rootVal = postorder[postEnd];
        const root = new TreeNode(rootVal);
        
        // Find root position in inorder array
        const rootIdx = inorderMap.get(rootVal);
        
        // Calculate size of left subtree
        const leftSize = rootIdx - inStart;
        
        // Build left and right subtrees
        root.left = build(
            inStart, rootIdx - 1,
            postStart, postStart + leftSize - 1
        );
        
        root.right = build(
            rootIdx + 1, inEnd,
            postStart + leftSize, postEnd - 1
        );
        
        return root;
    }
    
    return build(0, inorder.length - 1, 0, postorder.length - 1);
};
