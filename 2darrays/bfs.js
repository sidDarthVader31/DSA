//breath first search on a 2d arrays 
//
//
//
//


const bfs = (arr) =>{
  const result = [];
  const seen= new Array(arr.length).fill(0).map(()=>{
    return new Array(arr[0].length).fill(0)
  });

  let queue = [];
  queue.push([0,0]);

  while(queue.length >0){
    let pos = queue.shift();
    let row = pos[0];
    let column = pos[1];
    if(row <0 || row >arr.length-1 || column <0 || column >arr[0].length-1){
      continue;
    }

    if(!seen[row][column]){
      result.push(arr[row][column]);
      seen[row][column] = 1;
      queue.push([row-1, column]) //go up
      queue.push([row, column+1]) //go right 
      queue.push([row+1, column]) // go down 
      queue.push([row, column-1]) // go left 
    }
     }
  return result;
}


const bfs1 = (arr) =>{
  const result = [];
  const seen = new Array(arr.length).fill(0).map(()=>{
    return new Array(arr[0].length).fill(0)
  });
  let queue = [[0,0]];

  while (queue.length) {
    let pos = queue.shift();
    let row = pos[0];
    let column = pos[1];

    if(row <0 || row >= arr.length || column < 0 || column >= arr[0].length || seen[row][column]){
      continue;
    }

    seen[row][column] = 1;
    result.push(arr[row][column]);

    queue.push([row-1, column])
    queue.push([row, column+1])
    queue.push([row+1, column])
    queue.push([row, column-1])
  }
  return result;
}

console.log(bfs([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20]]));
console.log(bfs1([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20]]));
