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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    if(root.val == x || root.val == y) return false
    let queue = [];
    let cur;
    let k;
    let pair = [];
    queue.push([root, 0, 0]);
    while(queue.length > 0){
        cur = queue[0][0];
        k = queue[0][1] + 1;
        if(cur.val == x || cur.val == y) pair.push(queue[0]);
        if(pair.length == 2) return (pair[0][1] == pair[1][1] && pair[0][2] != pair[1][2])
        if(cur.left != null) queue.push([cur.left, k , cur.val]);
        if(cur.right != null) queue.push([cur.right,  k , cur.val]);
        queue.shift();
    }
    return false;
};