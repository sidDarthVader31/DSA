/**
 * link: https://leetcode.com/problems/intersection-of-two-linked-lists/description/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let map = new Map()
    while(headA){
      map.set(headA, headA);
      headA = headA.next;
    }
    while(headB){
        if(map.has(headB) && map.get(headB).next == headB.next){
            return headB;
        }
        headB = headB.next;
    }
    return null;
};
