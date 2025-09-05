/**
 * link : https://leetcode.com/problems/min-cost-to-connect-all-points/description/
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    const n = points.length
    let graph = new DSU(n);
    const edges = [];
    for(let i =0;i<n;i++){
        const [x1,y1] = points[i];
        for(let j=i+1;j<n;j++){
            const [x2,y2] = points[j];
            const weight = Math.abs(x1-x2) + Math.abs(y1-y2);
            edges.push([i,j,weight])
        }
    }
    edges.sort((a,b)=> a[2]-b[2])
    let totalWeight = 0;
    let count = 0;
    for(const [u,v,w] of edges) {
        if(graph.union(u,v)){
            totalWeight = totalWeight+w;
            count++;
            if(count == n-1) break;
        }
    }
    return totalWeight;
};

 class DSU {
  constructor(n) {
    this.parent = Array.from({ length: n}, (_, i) => i);
    this.rank = Array(n).fill(1);
  }

  find(u) {
    if (this.parent[u] !== u) {
      this.parent[u] = this.find(this.parent[u]); // Path compression
    }
    return this.parent[u];
  }

  union(u, v) {
    let pu = this.find(u);
    let pv = this.find(v);

    if (pu === pv) return false; // Already connected → would form cycle

    // Union by rank
    if (this.rank[pu] < this.rank[pv]) {
      this.parent[pu] = pv;
    } else if (this.rank[pu] > this.rank[pv]) {
      this.parent[pv] = pu;
    } else {
      this.parent[pv] = pu;
      this.rank[pu]++;
    }

    return true;
  }
}




var minCostConnectPoints = function (points) {
    class MinHeap {
        constructor() {
            this.heap = [];
        }

        getParentIndex(i) { return Math.floor((i - 1) / 2); }
        getLeftIndex(i) { return 2 * i + 1; }
        getRightIndex(i) { return 2 * i + 2; }

        swap(i, j) {
            [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
        }

        push(item) {
            this.heap.push(item);
            this.heapifyUp();
        }

        pop() {
            if (this.size() === 0) return null;
            if (this.size() === 1) return this.heap.pop();

            const root = this.heap[0];
            this.heap[0] = this.heap.pop();
            this.heapifyDown();
            return root;
        }

        peek() {
            return this.size() > 0 ? this.heap[0] : null;
        }

        size() {
            return this.heap.length;
        }

        heapifyUp() {
            let index = this.size() - 1;
            while (
                index > 0 &&
                this.heap[this.getParentIndex(index)][1] > this.heap[index][1]
            ) {
                this.swap(index, this.getParentIndex(index));
                index = this.getParentIndex(index);
            }
        }

        heapifyDown() {
            let index = 0;
            while (this.getLeftIndex(index) < this.size()) {
                let smallerChildIndex = this.getLeftIndex(index);
                if (
                    this.getRightIndex(index) < this.size() &&
                    this.heap[this.getRightIndex(index)][1] < this.heap[smallerChildIndex][1]
                ) {
                    smallerChildIndex = this.getRightIndex(index);
                }
                if (this.heap[index][1] <= this.heap[smallerChildIndex][1]) {
                    break;
                }
                this.swap(index, smallerChildIndex);
                index = smallerChildIndex;
            }
        }
    }

    const n = points.length;
    let edges = [];
    for (let i = 0; i < n; i++) {
        const [x1, y1] = points[i];
        for (let j = i + 1; j < n; j++) {
            const [x2, y2] = points[j];
            const weight = Math.abs(x2 - x1) + Math.abs(y2 - y1);
            edges.push([i, j, weight]);
        }
    }

    let graph = new Array(n).fill(0).map(() => []);
    for (const [u, v, w] of edges) {
        graph[u].push([v, w]);
        graph[v].push([u, w]);
    }

    let heap = new MinHeap();
    heap.push([0, 0]);
    let weight = 0;
    let visited = new Set();

    while (heap.size() > 0 && visited.size < n) {
        const [v, w] = heap.pop();
        if (visited.has(v)) continue;
        weight += w;
        visited.add(v);

        for (const [edge, wi] of graph[v]) {
            if (!visited.has(edge)) heap.push([edge, wi]);
        }
    }
    return weight;
};
