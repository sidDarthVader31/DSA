let arr = [23,2,4,6,7]
let prefix = [arr[0]]
const calculatePrefixSum = () =>{
  for(let i = 1;i< arr.length;i++){
    prefix[i] = prefix[i-1] + arr[i]
  }
  return prefix;
}

console.log(calculatePrefixSum())


const queryData = (left, right) =>{
  if(left == 0){
    return prefix[right];
  }
  return prefix[right] - prefix[left-1]
}
console.log(queryData(1,4))

// console.log(queryData(0,2))


const getEquilibriumIndex = () =>{
  //sum of elements on the left = sum of elements on the
  //right 
  for(let i=0;i< prefix.length;i++){
    let leftSum = prefix[i] || 0;
    let rightSum = prefix[prefix.length-1] - (prefix[i-1]||0);
    if(leftSum == rightSum){
      return i;
    }
  }
  return -1;
}

const noOfSubArrays = (num) =>{
  let map = {}
  let prefixSum = 0;
  // map[0] =1;
  let count = 0;
  for(let i =0;i< arr.length;i++){
    prefixSum = prefixSum + arr[i];
    count = count + (map[prefixSum-num] ||0);
    map[prefixSum] = (map[prefixSum] ||0) + 1;
  }
  console.log(`map:`, map)
  return count;
}

const subArraysWithAGivenSum = (num) =>{
  let left =0 ;
  let right = 0;
  let sum = 0;
  let result = [];
  for(;right < arr.length;right++){
    //expand the window 
    sum = sum + arr[right];
    while(sum > num && left <right){
      //shrink the window 
      sum = sum -arr[left] ;
      left++;
    }
    if(sum == num){
      console.log(`inside`)
      result.push(arr.slice(left, right+1));
    }

  }
  return result;
}


console.log(`count of subarrays:`, noOfSubArrays(6))

console.log(`equilibrium index:`, subArraysWithAGivenSum(6))
