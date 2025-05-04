
const arr = [2,7,8,6,4,1,9,3,5];




const quickSort = (arr, left, right) =>{

  if(left < right) {

    let pElem = arr[right];
    let pos  =left-1;
    for(let i =left;i<=right;i++){
      if(arr[i]<= pElem){
        //swap
        pos++;
        let temp = arr[i];
        arr[i] = arr[pos];
        arr[pos] = temp;
      }
    }
    //we have pos which is the position of pivot
    //we now need to sort arrays left and right of that
    //pos index
    quickSort(arr,left, pos-1);
    quickSort(arr, pos+1, right)
  }
}


quickSort(arr, 0, arr.length-1)
console.log(`arr now:`, arr)



