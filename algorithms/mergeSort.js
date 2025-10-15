// merge sort implementation

const mergeSort = (arr) => {
  const n = arr.length;

  if(n<=1) return arr;
  const mid = Math.floor(n/2);

  const left = arr.slice(0,mid)
  const right = arr.slice(mid);
  const sortLeft = mergeSort(left);
  const sortRight = mergeSort(right)
  return merge(sortLeft, sortRight);
}

const merge = (left, right) => {

  let i=0;
  let j = 0;
  const output = [];
  while(i< left.length && j < right.length) {
    if(left[i]< right[j]){
      output.push(left[i]);
      i++;
    }
    else{
      output.push(right[j]);
      j++;
    }
  }
  output.push(...left.slice(i));
  output.push(...right.slice(j));
  return output;
}

console.log(mergeSort([9,1,34,23,2,90]))

// merge sort for a linked list -
//



class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const mergeSortlist =  (head) => {
  if(!head || !head.next) {
    return head;
  }
  const middle = getMiddle(head);
  const right = middle.next;
  middle.next = null;
  const leftSort = mergeSortlist(head);
  const rightSort = mergeSortlist(right);
  return mergeList(leftSort, rightSort);
}

const mergeList = (l1, l2) => {
  let dummy = new ListNode(0)
  let tail = dummy;
  while(l1 && l2) {
    if(l1.val < l2.val) {
      tail.next = l1;
      l1 = l1.next;
    }
    else{
      tail.next = l2;
      l2 = l2.next;
    }
    tail = tail.next;
  }
  tail.next = l1 || l2;
  return dummy.next;
}

const getMiddle = (list) => {
  if(!list) return list;
  let fast = list.next;
  let slow = list
  while(fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}

function arrayToList(arr) {
  const dummy = new ListNode(0);
  let curr = dummy;
  for (const num of arr) {
    curr.next = new ListNode(num);
    curr = curr.next;
  }
  return dummy.next;
}


// Utility: Convert linked list → array (for display)
function listToArray(head) {
  const result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}



const arr = [4, 2, 1, 3, 5];
const head = arrayToList(arr);

console.log("Before sorting:", listToArray(head));

const sortedHead = mergeSortlist(head);
console.log("After sorting:", listToArray(sortedHead));
