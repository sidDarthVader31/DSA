const maxSum = (nums, k) =>{
  let maxSum = 0;
  let sum = 0;
  for(let i = 0;i< k;i++){
    maxSum = maxSum+nums[i];
    sum = sum+ nums[i];
  }
  for(let i= k;i< nums.length;i++){
    sum = sum+ nums[i] - nums[i-k];
    maxSum = Math.max(sum, maxSum)
  }
  return maxSum;
}


console.log(maxSum([1, 4, 2, 10, 2, 3, 1, 0, 20], 3))
