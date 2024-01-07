/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

const isVowel = (char) => {
  if(char === 'a' || char === 'e' || char === 'i' || char ==='o' || char === 'u'){
    return true;
  }
  return false;
}

function countVowels(str) {
  str = str.toLowerCase();
  let countVowel = 0;
  for(let i=0;i<str.length;i++){
    if(isVowel(str[i])){
      countVowel +=1;
    }
  }
  return countVowel;
}

module.exports = countVowels;