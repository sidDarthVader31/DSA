/**
 * link: https://leetcode.com/problems/climbing-stairs/description/
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if(n == 1)return 1;
  if(n==2) return 2;
  let first = 1;
  let second = 2;
  for(let i=2;i< n;i++){
    let temp = second;
    second = second+ first;
    first=temp;
  }
  return second;
};




/**
 * @param {number} n
 * @return {number}
 */
var climbStairsMemoization = function(n) {
  let steps = new Array(n).fill(undefined);

  const dp = (n) =>{
    if(n==0){
        return 1;
    }
    if(n==1){
        return 2;
    }
    if(steps[n]!=undefined){
        return steps[n];
    }
    return steps[n] = dp(n-1) + dp(n-2)
  }
  return dp(n-1)
};


