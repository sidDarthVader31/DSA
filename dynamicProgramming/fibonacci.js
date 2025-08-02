
// top down approach - memoization
const fibonacci = (number) =>{

  let fib = new Array(number+1).fill(0);
  const dp = (n) =>{
    if(n ==1) return 1;
    if(n==2) return 1;
    if(fib[n]!=0){
      console.log(`memoization used`)
      return fib[n];
    }
    return fib[n] = dp(n-1) + dp(n-2);
  }
  return dp(number);
}

let no = 10;
console.log(`fibonacci of ${no}::${fibonacci(no)}`)




const fibTabulation = (number) => {
  let fib = new Array(number+1).fill(0);

  if(number ==0 || number==1){
    return 1;
  }
  fib[0]=1;
  fib[1]=1;
  for(let i =2;i<number;i++){
    fib[i] = fib[i-1] + fib[i-2];
  }
  return fib[number-1];
}


console.log(`${no}th fibonacci no by tabluation is :${fibTabulation(no)}`)
