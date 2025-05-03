//implementing queue with stack 
//
//
//
//


class queue {
  constructor(){
    this.in = []; //to be used for enqueue
    this.out = []; //to be used for dequeue
  }


  enqueue(val) {
    this.in.push(val);
  }

  peek(){
    return this.in[0];
  }

  dequeue(){
    //pop all elements from in and add it to out 
    // then do one pop from out 
    if(this.in.length == 0){
      return 'queue is empty';
    }
    while(this.in.length >0){
      this.out.push(this.in.pop())
    }
    return this.out.pop();
  }
  size(){
    return this.in.length + this.out.length;
    //above line might need some error handling
  }

  isEmpty(){
    return this.in.length == this.out.length == 0;
  }
}



