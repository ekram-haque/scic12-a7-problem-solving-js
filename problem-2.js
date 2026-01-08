function countVowels(text) {
  let count = 0;
  let vowels = "aeiou";

  for (let i = 0; i < text.length; i++) {
    if (vowels.includes(text[i].toLowerCase())) {
      count++;
    }
  }

  return count;
}
const result = countVowels("programming");
// console.log(result); 