//A Ninja has an ‘N’ Day training schedule. He has to perform one of these three activities (Running, Fighting Practice, or Learning New Moves) each day. There are merit points associated with performing an activity each day. The same activity can’t be performed on two consecutive days. We need to find the maximum merit points the ninja can attain in N Days.
// We are given a 2D Array POINTS of size ‘N*3’ which tells us the merit point of specific activity on that particular day. Our task is to calculate the maximum number of merit points that the ninja can earn.
//
//
//
//


const ninja = (n, arr) => {
  const maxPoints = new Array(n).fill(0).map(()=>{
    return new Array(4).fill(-1);
  });

  const dp = (i, prev) =>{
    if(maxPoints[i][prev] !=-1) return maxPoints[i][prev];

    //base case 
     
    if(i == 0){
      let max = 0;

      for(let j=0;j<3;j++){
        if(j==prev)continue;
        max  = Math.max(arr[i][j], max)
      }
       return maxPoints[i][prev]=max;
    }
    let maxI = 0;
    for(let j=0;j<3;j++){
       if(j == prev){
         continue;
       }
      let total = arr[i][j] + dp(i-1,j)
      maxI = Math.max(total, maxI);
    }
    return maxPoints[i][prev] = maxI
  }

  return dp(n-1,3);
}

const a = [[10,40,70],[20,50,80],[30,60,90]];
const n = 3;
console.log(`max ninja points:`, ninja(n, a))
