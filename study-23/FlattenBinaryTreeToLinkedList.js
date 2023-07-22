/* Taken from https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description/
114. Flatten Binary Tree to Linked List

Given the root of a binary tree, flatten the tree into a "linked list":

The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
The "linked list" should be in the same order as a pre-order traversal of the binary tree.
*/

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {

    function preorderTraverse(node, rightNodes) {
        if(!node) return node;
        if(node.right){
            rightNodes.push(node.right);
            node.right = null;
        }
        if(node.left) {
            node.right = preorderTraverse(node.left, rightNodes);
            node.left = null;
        }
        if(!node.left && !node.right && rightNodes.length > 0) {//its leaf

            node.right = preorderTraverse(rightNodes.pop(), rightNodes);  
        }
        return node;
    }

    let rn = [];
    preorderTraverse(root, rn);
    
    return root;
};
