// taken from https://www.educative.io/courses/grokking-coding-interview-patterns-javascript/qZXVW4Nm0vr
// Given the root of a binary tree, display the values of its nodes while performing a level order traversal. 
// Return the node values for all levels in a string separated by the character :. 
// If the tree is empty, i.e., the number of nodes is 0, then return “None” as the output.
// Example:
//             __ 50 _ 
//            |       |
//         __ 20      60 _ 
//        |               |
//      _ 10              70 _ 
//     |                      |
//     5                      80 _ 
//                                |
//                               90 
// Expected Output: 50 : 20, 60 : 10, 70 : 5, 80 : 90


export let  levelOrderTraversal = function(root) {
    let currentQueue = [];
    let nextQueue = [];
    let ans = "";
    if(!root) return 'None';
    currentQueue.push(root);
    while(currentQueue.length > 0){
        if(ans.length > 0) ans += ' : '
        for(let i = 0; i < currentQueue.length; i++) {
            if(i > 0) ans += ', ';
            let left = currentQueue[i].left;
            let right = currentQueue[i].right;
            if(left) nextQueue.push(currentQueue[i].left);
            if(right) nextQueue.push(right);
            ans += currentQueue[i].data;
        }
        currentQueue = nextQueue;
        nextQueue = [];
    }
    return ans.length > 0 ? ans : 'None';
}
