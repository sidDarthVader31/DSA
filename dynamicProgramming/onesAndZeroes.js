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
