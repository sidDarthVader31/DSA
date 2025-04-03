// simple binary search algorithm
//
//arr is sorted array in increasing order
const binarySearch = (arr, n) =>{
  let left = 0;
  let right= arr.length -1;
  
  while(left < right){
    mid = Math.floor((left+ right)/2);
    if(arr[mid] == n){
      return mid;
    }
    else if (arr[mid]>n){
      right = mid-1;
    }
    else{
      left = mid+1;
    }
  }
}
