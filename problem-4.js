function findMaxNumber(numbers) {
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}
const result = findMaxNumber([1,3,4,5])

// console.log(result);
