/**
 * link: https://leetcode.com/problems/house-robber-iii/description/
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
var rob = function(root) {
    if(!root) return 0;

    const f = (node) => {
        //f(node) -> returns pick and skip values for node -> leaf 
        if(!node) return [0,0];
        let [leftPick, leftSkip] = f(node.left);
        let [rightPick, rightSkip] = f(node.right);

        let pick = node.val +leftSkip+ rightSkip;
        let skip = 
            Math.max(leftPick, leftSkip)+ //best outcome from left 
            Math.max(rightPick, rightSkip) // best outcome from right
        
        return [pick ,skip]
    }
    return Math.max(...f(root))
};
