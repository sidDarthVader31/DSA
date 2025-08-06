/**
 * link: https://leetcode.com/problems/ones-and-zeroes/description/
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    let zeros = new Array(strs.length).fill(0)
    let ones = new Array(strs.length).fill(0);
    let memo = {}
  for(let i =0;i< strs.length;i++){
    let zCount = 0;
    let oneCount = 0
    for(let j =0;j< strs[i].length;j++){
        if(strs[i][j]=='0')zCount++;
        if(strs[i][j]=='1') oneCount++
    }
    zeros[i] = zCount;
    ones[i] = oneCount;
  }
  const f = (i, zero, one) =>{
    const key = `${i}-${zero}-${one}`;
    if(memo[key]!=undefined) return memo[key];
    if(i<0 || zero <0 || one <0)return 0;
    if(zeros[i]<= zero && ones[i]<=one){
        return memo[key] = Math.max(
            f(i-1, zero,one),
            1+ f(i-1, zero-zeros[i], one - ones[i])
        )
    }
    else{
          return memo[key]= f(i-1, zero, one); //not picking
    }
  }
  return f(strs.length-1, m,n)
};


let memo  = new Array(nums.length).fill(0)
.map(()=>{
  return new Array(S+1).fill(undefined)
})
const f = (i, sum) =>{
  if(memo[i][sum]!= undefined) return memo[i][sum];
  if(sum == 0) return true;
  if(i<1) return false;

  if(nums[i] <= sum ){
    return memo[i][sum] =  f(i-1, sum - nums[i]) || f(i-1, sum)
  }
  else {
    return memo[i][sum] = f(i-1, sum);
  }
}
f(nums.length-1, S)


const tabulation = (nums, S) =>{

  let dp = new Array(nums.length).fill(0)
  .map(()=>{
    return new Array(S+1).fill(false)
  });




  for(let i = 0;i<nums.length;i++){
    dp[i][0] = true;
  }
  if(nums[0]<=S)dp[0][nums[0]] = true;

  for(let i =1;i< nums.length;i++){
    for(let s=0;s<=S;s++){
      if(nums[i]> s){
        //we cannot form the sum 
        dp[i][s]= dp[i-1][s]
      }
      else {
        dp[i][s] = dp[i-1][s] ||
          dp[i-1] [s-nums[i]]
      }
    }
  }
  return dp[nums.length-1][S];
}

let memo ={}
const f = (i, sum) =>{
  let key = `${i}-${sum}`
  if(sum > target)return false;
  if(i<0) return sum == 0;

  if(memo[key]!= undefined) return memo[key];

  if(nums[i]> sum){
    return memo[key] = f(i-1, sum)
  }
  return memo[key] = f(i-1, sum) || f(i-1, sum-nums[i]);
}


const tabulation = (nums) =>{
  let total = 0;

  for(let num of nums){
    total = total+ num;
  }
  if(total %2 !=0) return false;

  const target = total/2;

  let dp = new Array(nums.length)
  .fill(0).map(()=>{
    return new Array(target+1).fill(false)
  });


  dp[0][nums[0]]= true;

  for(let i =1;i< nums.length;i++){
    for(let s=0;s<=target;s++){

      if(nums[i]> s){
        dp[i][s] = dp[i-1][s]
      }
      else{
        dp[i][s] = dp[i-1][s] || dp[i-1][s-nums[i]]
      }
    }
  }
  return dp[nums.length-1][target];
}
