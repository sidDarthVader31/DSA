
const adjacencyList = [
  [1,3],
  [0],
  [3,8],
  [0,2,4,5],
  [3,6],
  [3],
  [4,7],
  [6],
  [2]
]

const bfs = () =>{
  const seen = {0:true};

  let queue = [];
  const output = [0];
  queue.push(adjacencyList[0]);
console.log(`eueue initial:`, queue)
  while(queue.length>0){
    let list = queue.shift();
    console.log(`list:`, list)
    for(let i = 0;i<list.length;i++){
      let vertex = list[i];
      if(seen[vertex]== true){
        console.log(`continuing`, seen)
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
