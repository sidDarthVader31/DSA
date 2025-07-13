
const adjacencyList = [
  [1,3],
  [0],
  [3,8],
  [0,4,5,2],
  [3,6],
  [3],
  [4,7],
  [6],
  [2]
]



const bfs1 = () =>{
  const seen = {};
  let queue = [];
  const output = [];
  queue.push(0);

  while(queue.length >0){
    let vertex = queue.shift();
    if(seen[vertex]== true){
      //already processed 
      continue;
    }
    output.push(vertex);
    seen[vertex] = true;
    //now we need to push all vertex of vertex 
    queue.push(...adjacencyList[vertex]);
  }
  return output;
}

console.log(`bfs1:`, bfs1())
const bfs = () =>{
  const seen = {0:true};

  let queue = [];
  const output = [0];
  queue.push(adjacencyList[0]);
  while(queue.length>0){
    let list = queue.shift();
    for(let i = 0;i<list.length;i++){
      let vertex = list[i];
      if(seen[vertex]== true){
        continue;
      }
      seen[vertex] = true;
      output.push(vertex);
      queue.push(adjacencyList[vertex]);
    }
  }
  console.log(`bfs answer:`, output);
}

bfs()
