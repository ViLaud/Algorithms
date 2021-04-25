/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
 var leafSimilar = function(root1, root2) {
    let l1 = new Array();
    let l2 = new Array();
    let i = 0;
    dfs(root1, l1, false);
    if(!dfs(root2, l2, true) || l2.length != l1.length) return false;
    return true;

function dfs(node, arr, check) {
    if(!node) return true;
    let isLeaf = (node.left == null && node.right == null);
    if(isLeaf){
        if(check) {
            if(l1[i] != node.val) return false;
            i++;
        }
        arr.push(node.val); 
        return true;
    }
    if(!dfs(node.left, arr, check)) return false;
    if(!dfs(node.right, arr, check)) return false;
return true;
}
    
};



// better solution 
leafSimilar = function(root1, root2) {
    dfs = function(node, leaves) {
        if (node != null) {
            if (node.left == null && node.right == null) {
                leaves.push(node.val);
            }
            dfs(node.left, leaves);
            dfs(node.right, leaves);
        }
    }
    let leaves1 = [];
    let leaves2 = [];
    dfs(root1, leaves1);
    dfs(root2, leaves2);

    return (leaves1.length == leaves2.length &&
            leaves1.every((v, i) => v === leaves2[i]));

