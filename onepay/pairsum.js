// You are given an array of transaction amounts (integers) and a target k.
// Return whether there exist two distinct transactions that sum exactly to k.
//
// Example:
//
// Input: arr = [12, 7, 5, 9], k = 14  
// Output: true   (5 + 9 = 14)


const ans = (arr, k) => {
  let map = new Map();

  for(const i of arr) {
    if(map.has(i)){
      return true
    }
    map.set(k-i, true);
  }
  return false;
}

console.log(ans([12,7,5,9], 14))
