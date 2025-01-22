/**
 * link: https://leetcode.com/problems/linked-list-cycle/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let first = head;
    let second = head?.next;
    while(second && second.next){
        if( first == second){
            return true;
        }
        first = first.next;
        second = second.next.next;
    }
    return false;
};
