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
 * @return {boolean}
 */
 var isSymmetric = function(root) {
    return isMirror(root, root);
    
    function isMirror(l, r){
        if(l == null && r == null) return true;
        if(l == null || r == null) return false;
        return (l.val == r.val) && isMirror(l.left, r.right) && isMirror(l.right, r.left)
    }
    
        
    };