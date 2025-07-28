/**
 * link : https://leetcode.com/problems/path-with-maximum-probability/
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */
var maxProbability = function(n, edges, succProb, start_node, end_node) {
    const distance = new Array(n).fill(-1);
    const graph = new Array(n).fill(0).map(()=> []);
    for(let i = 0;i<edges.length;i++){
        let prob = succProb[i];
        const [u,v] = edges[i];
        graph[u].push([v,prob]);
        graph[v].push([u,prob]);
    }
    distance[start_node] =1;
    let heap = new MaxHeap();
    heap.push([start_node,1]);
    while(!heap.isEmpty()){
        const [node,prob] = heap.pop();
        if(prob > distance[node])continue;
        for(const [neighbour, probN] of graph[node]){
            if(distance[neighbour] < prob*probN){
                distance[neighbour] = prob*probN;
                heap.push([neighbour, distance[neighbour]])
            }
        }
    }
    return distance[end_node] <=0 ? 0: distance[end_node]
};

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    _parent(index) {
        return Math.floor((index - 1) / 2);
    }

    _leftChild(index) {
        return 2 * index + 1;
    }

    _rightChild(index) {
        return 2 * index + 2;
    }

    _swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    _heapifyUp(index) {
        while (index > 0) {
            let parent = this._parent(index);
            if (this.heap[parent][1] < this.heap[index][1]) {
                this._swap(parent, index);
                index = parent;
            } else {
                break;
            }
        }
    }

    _heapifyDown(index) {
        let largest = index;
        let left = this._leftChild(index);
        let right = this._rightChild(index);

        if (left < this.heap.length && this.heap[left][1] > this.heap[largest][1]) {
            largest = left;
        }

        if (right < this.heap.length && this.heap[right][1] > this.heap[largest][1]) {
            largest = right;
        }

        if (largest !== index) {
            this._swap(index, largest);
            this._heapifyDown(largest);
        }
    }

    push(item) {
        this.heap.push(item);
        this._heapifyUp(this.heap.length - 1);
    }

    pop() {
        if (this.isEmpty()) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown(0);
        return top;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    peek() {
        return this.isEmpty() ? null : this.heap[0];
    }
}
