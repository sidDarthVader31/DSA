/**
 * link: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    //brute force....
    if(!head || !head.next){
        return null;
    } 
    let len = 0;
    let dummy = head;
    while(dummy){
        dummy = dummy.next;
        len++;
    }
    let current = head;
    let count = 1;
    let prev = null;
    while(current){
        let next = current.next;
        if(count == (len-n+1)){
            //remove the node 
            if(prev){
                prev.next = current.next;
                current.next = null;
            }
            else {
                current.next = null;
                head = next;
            }
            break;
        }
        count++;
        prev = current;
        current = current.next;
    }
    return head;
};


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEndOptimized = function(head, n) {
    //optimal solution 
    let dummy = new ListNode(0)
    dummy.next = head;
    let fast = dummy;
    let slow = dummy;

    //move fast by n+1;
    for(let i=0;i<=n;i++){
        fast = fast.next;
    }
    while(fast){
        fast = fast.next;
        slow = slow.next;
    }
    //now fast -> end and slow ->  length - end;
    slow.next = slow.next.next;
    return dummy.next;
};
