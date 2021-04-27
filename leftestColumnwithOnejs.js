/* // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} row, col
 *     @return {integer}
 *     this.get = function(row, col) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/* @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function(binaryMatrix) {
let ans = +Infinity;
let left = 0;
let right = binaryMatrix.dimensions()[1] - 1;
let found = [...Array(binaryMatrix.dimensions()[0]).keys()];

    return findTheOne(left, right, found);

function findTheOne(left, right, found){
    if(right<left) return ans == +Infinity ? -1 : ans;
    let temp = new Array;
    let col = Math.floor((left + right)/2)
    let i = 0;
    while(i < found.length ){
        if(binaryMatrix.get(found[i], col) == 1) temp.push(found[i]);
        i++;
    }
    if(temp.length > 0 ) {
        ans = col < ans ? col : ans;
        right = col - 1;
        found = temp;
    } 
    else{
    left = col + 1;
    }
       return findTheOne(left, right, found);

}
};