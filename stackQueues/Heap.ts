

class Heap {
  private arr: number[];
  constructor() {
    this.arr= [];
  }

  public pop(): number | undefined{
    if(this.arr.length == 0){
      return undefined;
    }
    const maxElement = this.arr[0];

    const last  = this.arr.pop();
    if(this.arr.length >0 && last != undefined){
      this.arr[0] = last;
      this.heapifyDown(0);
    }
    return maxElement;
  }
  public push(val : number) : void {
    this.arr.push(val); 
    this.heapifyUp();
  }
  public size (): number {
    return this.arr.length;
  }
  public peek(): number {
    return this.arr[0];
  }
  //take val down to its correct place
  private heapifyDown(index: number) : void {
    const left = index *2 +1;
    const right = index*2 +2;

    let largest = index;
    if(left < this.arr.length && this.arr[left] > this.arr[largest]) largest = left;
    if(right < this.arr.length && this.arr[right] > this.arr[largest]) largest = right;
    if(largest != index){
       [this.arr[index], this.arr[largest]] = [this.arr[largest], this.arr[index]];
      this.heapifyDown(largest);
    }
  }

  //take val up to its correct place 
  private heapifyUp() :void  {
    let index = this.arr.length-1;
    while(index >0) {
      const parentIndex = Math.floor((index-1)/2)
      const parent = this.arr[parentIndex];
      if(parent >= this.arr[index]){
        break;
      }
      //swap 
      this.arr[parentIndex] = this.arr[index]
      this.arr[index] = parent;
      index = parentIndex;
    }
  }

  public  print(){
    console.log(`print::`, this.arr);
  }
}




const  driver = () => {


//driver code 
//
const heap  = new Heap();

heap.push(35);
heap.print()
heap.push(10)
heap.print();

heap.push(25)
heap.push(15)
heap.push(50)
heap.push(20)
heap.push(40)
heap.print()
}

driver()
