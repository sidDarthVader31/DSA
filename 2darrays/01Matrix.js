/**
 * link: https://leetcode.com/problems/01-matrix/description/
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    let output = new Array(mat.length).fill(0).map(()=>{
        return new Array(mat[0].length).fill(Infinity)
    }) ;
    let queue = [];
    for(let row = 0;row< mat.length;row++){
        for(let col=0;col< mat[0].length;col++){
            if(mat[row][col] ==0){
                queue.push([row,col]);
                output[row][col]=0;
            }
        }
    }
    bfs(queue, mat, output);
    return output;
};


const wallsAndGates = function(grid){
  let output = new Array(grid.length).fill(0).map(()=>{
    return new Array(grid[0].length).fill(Infinity)
  });
  let queue = [];
  for(let row = 0;row< grid.length;row++){
    for(let col=0;col<grid[0].length;col++){
      if(grid[row][col] == 0){
        queue.push([row,col])
        output[row][col]=0;
      } 
    }
  }
  bfsWallsAndGates(queue,grid, output);
  return output;
}

const wallsInput =[
  [1,-1,0, 1],
  [1, 1,1,-1],
  [1,-1,1,-1],
  [0,-1,1, 1]
]
const bfsWallsAndGates = (queue, grid, output) =>{
  const directions = [[-1,0],[1,0],[0,-1],[0,1]];

  console.log(`queue:`, queue);
  while(queue.length>0){
    const [row, col] = queue.shift();
    console.log(`row:${row}, col:${col}`);
    for(let i = 0;i< directions.length;i++){
      const [dr,dc]= directions[i];
      let nr = row+dr;
      let nc = col+dc;
      if(nr <0||nc<0||nr>=grid.length||nc>=grid[0].length|| grid[nr][nc]==-1){
        continue;
      }
      console.log(`dr:${dr}, dc:${dc}`);
      console.log(`nr:${nr}, nc:${nc}, grid:${grid[nr][nc]}`);
      if(output[nr][nc] > output[row][col]+1){
        output[nr][nc]= output[row][col]+1;
        queue.push([nr,nc]);
      }
    }
  }
}
const bfs = (queue,grid, output) =>{
    const directions = [[-1,0],[1,0],[0,-1],[0,1]];
    while(queue.length>0){
        const [row, col] = queue.shift();
        for(let i =0;i< directions.length;i++){
            const [dr,dc]= directions[i];
            let nr = row+dr;
            let nc = col+dc;
            if(nr<0|| nc<0 || nr >=grid.length||nc>=grid[0].length){
                continue;
            }
            if(output[nr][nc] > output[row][col]+1){
                output[nr][nc]= output[row][col]+1
                queue.push([nr,nc])
            }

        }    
    }
}
console.log(`walls and gates output:`, wallsAndGates(wallsInput));


