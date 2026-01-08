function getEvenValues(arr) {
  let result = [];

  for (let num of arr) {
    if (num % 2 === 0) {
      result.push(num);
    }
  }

  return result;
}
const result = getEvenValues([1, 2, 3, 4, 5, 6,12]);
// console.log(result);
