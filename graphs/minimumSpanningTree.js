
// simple implementation of minimum spanning tree using
// Prim's algorithm 
//
//
//
//


const PrimMST = (graph) =>{
  const n = graph.length;
  let mst = [];
  let visited = new Array(n).fill(false);
  let heap = new MinHeap();

  heap.push([0,0,-1]) // [weight, to, from ]

  while(!heap.isEmpty()){
    const [weight, node, parent] = heap.pop();
    if(visited[node])continue;

    visited[node]= true;
    if(parent !=-1){
      mst.push([parent, node, weight]);
    }

    for(const [neighbour, w] of graph){
      if(!visited[neighbour]){
        queue.push([w, neighbour, node]);
      }
    }
  }
  return mst;
}




// Kruskal's algorithm for Minimum Spanning Tree- using
// disjoint sets (UNION and FIND)
 class DSU {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = Array(n).fill(0);
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

function kruskal(n, edges) {
  edges.sort((a, b) => a[2] - b[2]); // Sort by weight
  const dsu = new DSU(n);
  let totalWeight = 0;
  let mst = [];

  for (let [u, v, weight] of edges) {
    if (dsu.union(u, v)) {
      totalWeight += weight;
      mst.push([u, v, weight]);
    }
  }

  // Optional: check if all nodes are connected
  if (mst.length !== n - 1) return "MST not possible — graph not connected";

  return { totalWeight, mst };
}

