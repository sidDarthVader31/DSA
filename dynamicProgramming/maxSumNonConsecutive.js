// QUESTION 1: Maximum Sum of Non-Consecutive Elements
// =====================================================
//
// PROBLEM STATEMENT:
// Given an array of numbers, find the maximum sum of non-consecutive elements.
//
// This is a classic dynamic programming problem where you cannot select adjacent elements.
//
// SAMPLE INPUT 1:
// [5, 5, 10, 100, 10, 5]
//
// SAMPLE OUTPUT 1:
// 110


const maxSum = (arr) =>{
  const dp = new Array(arr.length).fill(undefined);
  const f= (i) => {
    //f(i) -> max sum of non consecutive elements of arr
    //length i ;
    
    if(dp[i] !=undefined){
      return dp[i];
    }
    if(i == 0) {
      return dp[i]=arr[0];
  }
    else if(i<0){
      return 0;
    }

    return dp[i]= Math.max(
      arr[i] + f(i-2),
      f(i-1)
    )
  }
  return f(arr.length-1);
}


console.log(`max sum:`, maxSum([5, 5, 10, 100, 10, 5]))
