
/**
 * link : https://leetcode.com/problems/path-with-minimum-effort/description/
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
   const rows= heights.length;
   const cols = heights[0].length;

   let distance = new Array(rows).fill(0).map(()=>{
    return new Array(cols).fill(Infinity);
   });

   distance[0][0]=0;
   let heap = new MinHeap();
   heap.push([0,0,0]);
   const directions = [[-1,0],[0,1],[1,0],[0,-1]];
   while(!heap.isEmpty()){
    const [row, col, effort] = heap.pop();
    if(row == rows-1 && col == cols-1){
        return effort;
    }
    for(const [dr, dc] of directions){
        let nr = row+dr;
        let nc = col+dc;
        if(nr <0 || nc <0 || nr >=rows || nc >=cols){
            continue;
        }
        let stepEffort = Math.abs(heights[row][col]- heights[nr][nc]);
        const maxEffort = Math.max(stepEffort, effort);
        if(distance[nr][nc] > maxEffort){
            distance[nr][nc]= maxEffort;
            heap.push([nr, nc, maxEffort]);
        }
    }
   }
   return 0;

};


class MinHeap {
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
            if (this.heap[parent][2] > this.heap[index][2]) {
                this._swap(parent, index);
                index = parent;
            } else {
                break;
            }
        }
    }

    _heapifyDown(index) {
        let smallest = index;
        let left = this._leftChild(index);
        let right = this._rightChild(index);

        if (left < this.heap.length && this.heap[left][2] < this.heap[smallest][2]) {
            smallest = left;
        }

        if (right < this.heap.length && this.heap[right][2] < this.heap[smallest][2]) {
            smallest = right;
        }

        if (smallest !== index) {
            this._swap(index, smallest);
            this._heapifyDown(smallest);
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
}
