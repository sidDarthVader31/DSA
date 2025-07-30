class MinHeap3 {
  constructor() {
    this.heap = [];
  }

  // Helper methods
  getLeftChildIndex(i) { return 2 * i + 1; }
  getRightChildIndex(i) { return 2 * i + 2; }
  getParentIndex(i) { return Math.floor((i - 1) / 2); }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  insert(edge) {
    this.heap.push(edge);
    this.heapifyUp();
  }

  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return min;
  }

  heapifyUp() {
    let i = this.heap.length - 1;
    while (
      i > 0 &&
      this.heap[this.getParentIndex(i)][0] > this.heap[i][0]
    ) {
      this.swap(i, this.getParentIndex(i));
      i = this.getParentIndex(i);
    }
  }

  heapifyDown() {
    let i = 0;
    while (this.getLeftChildIndex(i) < this.heap.length) {
      let smallerChildIndex = this.getLeftChildIndex(i);
      const rightChildIndex = this.getRightChildIndex(i);

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex][0] < this.heap[smallerChildIndex][0]
      ) {
        smallerChildIndex = rightChildIndex;
      }

      if (this.heap[i][0] <= this.heap[smallerChildIndex][0]) break;

      this.swap(i, smallerChildIndex);
      i = smallerChildIndex;
    }
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}


const connectCities = (n, connections) =>{

  const graph = new Array(n).fill(0).map(()=>[]);
  for(const [u,v,w] of connections){
    graph[u-1].push([v-1,w]);
    graph[v-1].push([u-1,w]);
  }
  const heap = new MinHeap3();
  let visited = new Set();
  heap.insert([0,0]);
  let totalWeight = 0;
  while(!heap.isEmpty()){
    const [weight, node] = heap.extractMin();
    if(visited.has(node)){
      continue;
    }
    visited.add(node);
    totalWeight = totalWeight+ weight
    if(visited.size == n){
      return totalWeight
    }

    for(const [neighbour, w] of graph[node]){
      if(!visited.has(neighbour)){
        heap.insert(([w,neighbour]))
      }
    }
  }
  return -1;
}

const n = 4;
const connections = [
  [1, 2, 3],
  [3, 4, 4],
  [1, 4, 5],
  [2, 3, 2],
  [1, 3, 1]
];
console.log(`answer:`, connectCities(n,connections))

