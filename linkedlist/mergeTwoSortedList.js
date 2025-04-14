/**
 * link: https://leetcode.com/problems/merge-two-sorted-lists/description/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let head1 = list1;
    let head2 = list2;
    let head = null;
    if(!head1){
        return head2;
    }
    if(!head2){
        return head1;
    }
    if(head1.val <= head2.val){
        head = list1;
        head1 = head1.next;
    }
    else{
        head = list2;
        head2 = head2.next;
    }
    let prev = head;
    while(head1 && head2){
        if(head1.val <= head2.val){
            head.next = head1;
            head1 = head1.next;
        }
        else if( head2.val < head1.val){
            head.next = head2;
            head2 = head2.next;
        }
           head = head.next
    }
         if (head1){
            head.next = head1;
        }
        else if(head2){
            head.next = head2;
        }
     
    return prev;
};
