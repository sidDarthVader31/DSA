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

const output = [];
const dfs = (vertex, seen={}) =>{
  if(seen[vertex] == true){
    return output;
  }
  output.push(vertex);
  seen[vertex] =true;
  const list = adjacencyList[vertex];
  for(let i =0;i< list.length;i++){
    let node = list[i];
    if(!seen[node]){
      dfs(node,seen)
    }
  }
}

dfs(0,{})
console.log(`output dfs:`, output)



// if we want to have output array in our dfs function
//
//
const dfs1 = (vertex, seen ={}, output = [])=>{
  seen[vertex] = true;
  output.push(vertex);
  const list = adjacencyList[vertex];
  for(let i = 0;i< list.length;i++){
    let node = list[i];
    if(!seen[node]){
      dfs1(node, seen, output);
    }
  }
  return output;
}
