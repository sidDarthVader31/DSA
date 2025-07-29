
link: https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/
/**
 * @param {number} maxTime
 * @param {number[][]} edges
 * @param {number[]} passingFees
 * @return {number}
 */
var minCost = function(maxTime, edges, passingFees) {
   let n = passingFees.length;
   let minTime = new Array(n).fill(Infinity);
   minTime[0]=0;
   let graph = new Array(n).fill(0).map(()=>[]);

   for(const[u,v,t] of edges){
    graph[u].push([v,t]);
    graph[v].push([u,t]);
   }
   let heap = new MinHeap();
   heap.push([passingFees[0],0,0]) //[cost,time, node]

   while(!heap.isEmpty()){
    const [cost, time, node]= heap.pop();
    if(node == n-1) return cost;
    for(const [neighbour, t] of graph[node]){
        const newTime = time+t;
        const newCost = cost+ passingFees[neighbour];
        if(newTime <= maxTime && newTime < minTime[neighbour]){
            minTime[neighbour]= newTime;
            heap.push([newCost, newTime, neighbour]);
        }
    }
   }
   return -1;
};

class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this._heapifyUp();
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        return top;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    _heapifyUp() {
        let idx = this.heap.length - 1;
        while (idx > 0) {
            let parent = Math.floor((idx - 1) / 2);
            if (this.heap[parent][0] > this.heap[idx][0]) {
                [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
                idx = parent;
            } else break;
        }
    }

    _heapifyDown() {
        let idx = 0;
        const length = this.heap.length;
        while (true) {
            let smallest = idx;
            let left = 2 * idx + 1;
            let right = 2 * idx + 2;

            if (left < length && this.heap[left][0] < this.heap[smallest][0]) {
                smallest = left;
            }
            if (right < length && this.heap[right][0] < this.heap[smallest][0]) {
                smallest = right;
            }

            if (smallest !== idx) {
                [this.heap[smallest], this.heap[idx]] = [this.heap[idx], this.heap[smallest]];
                idx = smallest;
            } else break;
        }
    }
}
