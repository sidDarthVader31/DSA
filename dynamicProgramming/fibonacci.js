
// top down approach - memoization
const fibonacci = (number) =>{

  let fib = new Array(number+1).fill(0);
  const dp = (n) =>{
    if(n ==1) return 1;
    if(n==2) return 1;
    if(fib[n]!=0){
      return fib[n];
    }
    return fib[n] = dp(n-1) + dp(n-2);
  }
  return dp(number);
}

let no = 10;
console.log(`fibonacci of ${no}::${fibonacci(no)}`)

