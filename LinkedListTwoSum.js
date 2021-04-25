/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let ans = new ListNode(0);
    let cur = ans;
    let carry = 0;
    let sum = 0 
    let n1;
    let n2;
while(l1 || l2){
        n1 = l1 ? l1.val : 0;
        n2 = l2 ? l2.val : 0;
        sum = n1 + n2 + carry;
        cur.next = new ListNode(sum%10);
        cur = cur.next;
        carry = Math.floor(sum/10);
        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;   
    }
if (carry > 0){
        cur.next = new ListNode(carry);
        }
return ans.next;
};