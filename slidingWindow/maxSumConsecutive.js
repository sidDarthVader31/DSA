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


// console.log(maxSum([1, 4, 2, 10, 2, 3, 1, 0, 20], 3))


var dominantIndex = function(nums) {
    let maxIndex = 0;
    let max= nums[0];
    let length = nums.length;
    for(let i = 1;i< nums.length;i++){
        if(nums[i] > max){
            maxIndex = i;
            max = nums[i];
        }
    }
    output = nums.sort((a,b) =>{
        return a-b;
    })
    return nums[length-1] >= 2*nums[length-2] ? maxIndex: -1;
};

console.log(dominantIndex([1,2,3,4]))
