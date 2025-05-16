//isPalindrome("A man, a plan, a canal: Panama") // true


const data = (str) =>{
  let left = 0;
  let right = str.length-1;

  while(left <= right){
    if(!isNonAlphanumeric(str[left])){
      left++;
    }
    else if(!isNonAlphanumeric(str[right])){
      right--;
    }
    else if (str[left]!= str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

function isNonAlphanumeric(char) {
  return !/^[a-zA-Z0-9]$/.test(char);
}
console.log(data("A man, a plan, a canal: Panama"))
console.log(`test:`, isNonAlphanumeric("1"))
