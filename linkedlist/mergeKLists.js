/**
 * link: https://leetcode.com/problems/merge-k-sorted-lists/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
     if (lists.length === 0) return null;
    
    while (lists.length > 1) {
        let mergedLists = [];
        for (let i = 0; i < lists.length; i += 2) {
            let l1 = lists[i];
            let l2 = (i + 1 < lists.length) ? lists[i + 1] : null;
            mergedLists.push(mergeTwoLists(l1, l2));
        }
        lists = mergedLists;
    }
    return lists[0]
};


const mergeTwoLists = (list1, list2) => {
        //base case 
   if(!list1 || !list2) {
    return list1 ? list1 : list2;
   }
   if(list1.val > list2.val ){
    [list1, list2] = [list2, list1]; //swap
   }
   list1.next = mergeTwoLists(list1.next, list2);
   return list1;
}
