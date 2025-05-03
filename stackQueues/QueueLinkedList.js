
//implementing queue using a linked list 
//
//
//



class Node {
  constructor(data) {
    this.val = data;
    this.next= null;
  }
}

class Queue {
  constructor(){
    this.front = this.rear = null;
  }

  isEmpty(){
    return this.front == null;
  }

  enqueue(newData) {
    const node = new Node(newData);
    if(this.isEmpty()){
      this.front = this.rear = node;
      return;
    }
    this.rear.next = node;
    this.rear = node;
  }
  dequeue() {
    if(this.isEmpty()){
      return ;
    }
    const toReturn = this.front;
    this.front = this.front.next;
    if(this.front == this.rear){
      this.rear = null;
    }
    return toReturn;
  }
}
