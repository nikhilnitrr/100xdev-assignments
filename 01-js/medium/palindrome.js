/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if(!str.length){
    return true;
  }
  str = str.toLowerCase();
  const regex = /[^a-zA-Z0-9]/g;
  str = str.replace(regex, '');
  let start = 0 , end = str.length-1;
  while(start<=end){
    if(str[start] != str[end]){
      return false;
    }
    else{
      start++;
      end--;
    }
  }
  return true;
}
module.exports = isPalindrome;
