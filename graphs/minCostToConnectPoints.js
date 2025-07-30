/**
 * link: https://leetcode.com/problems/min-cost-to-connect-all-points/
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    let n = points.length
    const dsu = new DSU(n);
    let edges = [];
    let totalWeight = 0;

    for(let i =0;i< n;i++){
        const [x1,y1]= points[i]
        for(let j=i+1;j<n;j++){
            const [x2,y2] = points[j];
            const weight = Math.abs(x1-x2) + Math.abs(y1-y2)
            edges.push([i,j,weight]);
        }
    }

    edges = edges.sort((a,b)=> a[2]-b[2]); //sort by weight
    let count =0;
    for(const [u,v,w] of edges){
        if(dsu.union(u,v)){
            totalWeight = totalWeight+w;
            count++;
            if(count == n-1)break;
        }
    
    }
    return totalWeight
};


// Kruskal's algorithm for Minimum Spanning Tree- using
// disjoint sets (UNION and FIND)
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
