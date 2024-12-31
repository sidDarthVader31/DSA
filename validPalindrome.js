/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
s = s.toLowerCase();
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (!isAlphanumeric(s[left])) {
      left++;
    } else if (!isAlphanumeric(s[right])) {
      right--;
    } else {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }
  }
  return true;
};
function isAlphanumeric(char) {
  const charCode = char.charCodeAt(0);
  return (charCode >= 97 && charCode <= 122) || (charCode >= 48 && charCode <= 57);
}
