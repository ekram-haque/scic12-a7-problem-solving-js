function checkPalindrome(text) {
  let result = "";

  for (let ch of text) {
    result = ch + result;
  }

  return text === result;
}
const result = checkPalindrome("madam");
// console.log(result);

