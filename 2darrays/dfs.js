
const dfs = (arr) =>{
  let output = [];
  recursiveDFS(arr, output, 0, 0, {})
  return output
}

const recursiveDFS = (arr, output, row=0, column=0, map={})=>{
  //base case 
  if(column <0 && column >=arr[0].length && row < 0 && row >=arr.length){
    return output;
  }
  if(!map[[row,column]]){
    map[[row,column]]=1;
    output.push(arr[row][column]);
  }
  //go up 
  if(!map[[row-1,column]] && row >0){
    recursiveDFS(arr, output, row-1, column, map);
  }
  //go right
  else if(!map[[row,column+1]] && column < arr[0].length-1){
    recursiveDFS(arr, output, row, column+1, map);
  }
  //go down 
  else if(!map[[row+1, column]] && row < arr.length-1){
    recursiveDFS(arr, output, row+1, column, map);
  }
  else if(!map[[row, column-1]] && column > 0){
    recursiveDFS(arr, output, row, column-1, map)
  }
  return 
}

console.log(`dfs:`, dfs([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20]]))
