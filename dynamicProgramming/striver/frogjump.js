


const frogJum = (jump=[]) =>{
  let min = new Array(jump.length);
  const dp = (index)=>{
    if(index == 0) return 0;
    if(index == 1) return  jump[index]- jump[0]


    if(min[index]!= undefined) return min[index];

    let firstJump = dp(index-1) + Math.abs(jump[index]-jump[index-1]);
    let rightJump = Infinity;
    if(index >1){
      rightJump = dp(index-2) + Math.abs(jump[index]- jump[index-2]);
    }
    return Math.min(firstJump, rightJump)
    }
  return dp(jump.length-1);
}


console.log(`frog jump:`, frogJum([30,10,60,10,60,50]))
