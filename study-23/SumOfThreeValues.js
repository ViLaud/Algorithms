// Taken from https://www.educative.io/courses/grokking-coding-interview-patterns-javascript/Y51x83vkz0Y 
// Given an array of integers, nums, and an integer value, target, 
// determine if there are any three integers in nums whose sum is equal to the target, 
// that is, nums[i] + nums[j] + nums[k] == target. 
// Return TRUE if three such integers exist in the array. Otherwise, return FALSE.
// Examples: 
//
// nums = [-1, 1, 1] 
// target = 2 
// Expected output = False
//
// nums = [1, 2, 3, 8, 8, 8, 9, 10] 
// target = 24 
// Expected Output = True
//

export function findSumOfThree(nums, target) {
    let l = 0, 
        h = nums.length - 1;
    let seen = new Set();
    nums.sort((a, b) => a - b);
    while(l<h){
        let rem = target - (nums[l] + nums[h]);
        if(seen.has(rem)) return true;
        if(rem > nums[h]){
            seen.add(nums[l]);
            l++;
        } else {
            seen.add(nums[h]);
            h--;
        }
    }
    return false
}
