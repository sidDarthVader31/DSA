// implementation of shortest path algorithm for unweighted
// graph 
//
//
//


const shortestPath = (n, edges=[], source) =>{
  const graph  = new Array(n).fill(0).map(()=> []);

  //create an adjacency list 
  for(const [u,v] of edges) {
    graph[u].push(v);
  }

  //create a distance array 
  //
 let distance = new Array(n).fill(-1); 
  distance[source] =0;
  let queue = [];
  queue.push(source);


  while(queue.length>0){
    let node = queue.shift();

    for (const edge of graph[node]){
      if(distance[edge] == -1){
        distance[edge] = distance[node] + 1;
        queue.push(edge);
      }
    }
  }

  return distance;
}

console.log(shortestPath(5, [
    [0, 1],
    [1, 2],
    [2, 4],
    [4, 3],
    [3, 0]
], 0));
