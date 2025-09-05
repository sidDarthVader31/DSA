

class MinHeap {
  constructor(){
    this.arr = [];
  }

  size(){
    return this.arr.length;
  }

  peek(){
    return this.arr[0];
  }

  push(val) {
    this.arr.push(val);
    
  }


  //************ private methods *******************
  //
  heapifyUp() {
    let index = this.arr.length-1;
    while(index >0){

      const parentIndex = Math.floor((index-1)/2);
      const parent = this.arr[index];

      if(parent >= this.arr[index]){
        break;
      }
      //swap 
      this.arr[parentIndex] = this.arr[index];
      this.arr[index]= parent;
      index = parentIndex;
    }
  }
  heapifyDown(index) {
    const left = index*2 +1;
    const right = index*2 + 2;
    let largest = index;
    if(left < this.arr.length && this.arr[left] > this.arr[largest]) largest = left;
    if(right < this.arr.length && this.arr[right]> this.arr[largest]) largest = right;
    
    if(largest != index){
      //swap 
      [this.arr[index],this.arr[largest]]=[this.arr[largest], this.arr[index]];
      this.heapifyDown(largest);
  }
}
}
