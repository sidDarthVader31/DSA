/**
 * link: https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let output = [];
    const traverse = (node) =>{
        if(!node){
            output.push("N")
            return;
        }
        output.push(node.val.toString());
        traverse(node.left);
        traverse(node.right);
    }
    traverse(root)
    return output.join(",")
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const nodeValues = data.split(",");
    let i = 0;
    function buildTree() {
        if (nodeValues[i] === "N") {
            i++;
            return null;
        }
        const node = new TreeNode(parseInt(nodeValues[i]));
        i++;
        node.left = buildTree();
        node.right = buildTree();
        return node;
    }
    return buildTree();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
