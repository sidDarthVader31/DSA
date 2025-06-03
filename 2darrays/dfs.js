//depth first search on a 2d array
const dfs = (arr) =>{
  let output = [];
  recursiveDFS(arr, output, 0, 0, {})
  // recurisveDFS1(arr, output, 0, 0, {});
  return output
}

const recursiveDFS = (arr, output, row=0, column=0, map={})=>{
  //base case 
  if(column <0 || column >=arr[0].length ||row < 0 || row >=arr.length){
    return output;
  }
  if(!map[[row,column]]){
    map[[row,column]]=1;
    output.push(arr[row][column]);
  }
  //go up 
  if(!map[[row-1,column]]){
    recursiveDFS(arr, output, row-1, column, map);
  }
  //go right
   if(!map[[row,column+1]]){
    recursiveDFS(arr, output, row, column+1, map);
  }
  //go down 
   if(!map[[row+1, column]]){
    recursiveDFS(arr, output, row+1, column, map);
  }
   if(!map[[row, column-1]]){
    recursiveDFS(arr, output, row, column-1, map)
  }
  return 
}

const recurisveDFS1 = (arr, output, row=0, column =0, map={})=>{
  //base case 
  if(column <0 || column >=arr[0].length || row <0 || row >=arr.length || map[[row,column]]){
    return ;
  }
  output.push(arr[row][column])
  map[[row,column]] = 1;
  recurisveDFS1(arr, output, row-1, column, map);
  recurisveDFS1(arr, output, row, column+1, map)
  recurisveDFS1(arr, output, row+1, column, map)
  recurisveDFS1(arr, output, row, column-1, map);
}

console.log(`dfs:`, dfs([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20]]))
