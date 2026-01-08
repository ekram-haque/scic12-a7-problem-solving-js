function makeTitle(text) {
  let result = "";

  let words = text.split(" ");

  for (let word of words) {
    result += word[0].toUpperCase() + word.slice(1) + " ";
  }

  return result.trim();
}
const result = makeTitle("hello world");
// console.log(result);
