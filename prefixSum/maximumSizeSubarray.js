const maxSizeSubArray = (nums, k) =>{
  let map = new Map();
  map.set(0,-1);
  let prefixSum = 0;
  let maxSize = 0;
  for(let i = 0;i< nums.length;i++){
    prefixSum = prefixSum + nums[i];
    if(map.has(prefixSum-k)){
      maxSize = Math.max(maxSize, i-map.get(prefixSum-k));
    }
    if(!map.has(prefixSum)){
      map.set(prefixSum, i);
    }
  }
  return maxSize;
}
