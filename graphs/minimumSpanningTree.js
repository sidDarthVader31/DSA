
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
