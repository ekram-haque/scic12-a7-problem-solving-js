function sumArray(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }

  return sum;
}
const result = sumArray([1, 2, 44, 4]);
// console.log(result); 
