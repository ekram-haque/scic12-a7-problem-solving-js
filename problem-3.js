function checkPalindrome(text) {
  let result = "";

  for (let ch of text) {
    result = ch + result;
  }

  return text === result;
}

// console.log(checkPalindrome("madam"));

