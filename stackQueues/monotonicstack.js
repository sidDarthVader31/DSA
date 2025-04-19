
const monotonicStackDecreasing = (arr) =>{
  const stack = [];
  for(let i =0;i< arr.length;i++){

    while(arr[i] > stack[stack.length-1]){
      stack.pop();
    }
    stack.push(arr[i]);
  }
  return stack;
}

const monotonicStackIncreasing = (arr) =>{
  const stack = [];
  for(let i = 0;i< arr.length;i++){
    while(arr[i] < stack[stack.length-1]){
      stack.pop();
    }
    stack.push(arr[i])
  }
  return stack;
}
console.log(`monotonic stack decreasing:`, monotonicStackDecreasing([1,7,9,5,8]))
console.log('monotonic stack increasing:',monotonicStackIncreasing([1,7,9,5,8]))
