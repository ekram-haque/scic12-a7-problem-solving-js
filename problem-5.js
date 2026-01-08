function removeDuplicates(numbers) {
  let uniqueArray = [];

  for (let i = 0; i < numbers.length; i++) {
    if (!uniqueArray.includes(numbers[i])) {
      uniqueArray.push(numbers[i]);
    }
  }

  return uniqueArray;
}
const result = removeDuplicates([1, 2, 2, 3, 4, 4]);
// console.log(result);
