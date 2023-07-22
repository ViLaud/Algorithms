import {TreeNode} from './ds_v1/BinaryTree.js';
// Definition of a binary tree node
// class TreeNode {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

export function diameterOfBinaryTree(root) {
    // Your code will replace this placeholder return statement
    let maxDiameter = 0;
    // get longest path of left
    // get longest path of right
    // add and compare with maxDimeter 
    // return longest path left or right

    function calcPath(node) {
        let rPath = 0;
        let lPath = 0;
        let maxPath = 0;
        if(!node) return 0;
        if(node.left){
            lPath = calcPath(node.left);
        }
        if(node.right){
            rPath = calcPath(node.right);
        }
        if(!node.right && !node.left){
            return 1;
        }
        maxDiameter = Math.max(maxDiameter, (lPath+rPath));
        maxPath = Math.max(lPath, rPath);
        return maxPath + 1;
    }
    calcPath(root);
    return maxDiameter;
}
