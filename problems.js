
// problem 1 
function reverseString(text) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    result = text[i] + result;
  }
  return result;
}
const result1 = reverseString("hello");
// console.log(result);


// problem 2 
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
const result2 = countVowels("programming");
// console.log(result); 


// problem 3
function checkPalindrome(text) {
  let result = "";
  for (let ch of text) {
    result = ch + result;
  }
  return text === result;
}
const result3 = checkPalindrome("madam");
// console.log(result);


// problem 4
function findMaxNumber(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}
const result4 = findMaxNumber([1,3,4,5])
// console.log(result);


// problem 5
function removeDuplicates(numbers) {
  let uniqueArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (!uniqueArray.includes(numbers[i])) {
      uniqueArray.push(numbers[i]);
    }
  }
  return uniqueArray;
}
const result5 = removeDuplicates([1, 2, 2, 3, 4, 4]);
// console.log(result);


// problem 6 
function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}
const result6 = sumArray([1, 2, 44, 4]);
// console.log(result); 


// problem 7 
function getEvenValues(arr) {
  let result = [];
  for (let num of arr) {
    if (num % 2 === 0) {
      result.push(num);
    }
  }
  return result;
}
const result7 = getEvenValues([1, 2, 3, 4, 5, 6,12]);
// console.log(result);


// problem 8 
function makeTitle(text) {
  let result = "";
  let words = text.split(" ");
  for (let word of words) {
    result += word[0].toUpperCase() + word.slice(1) + " ";
  }
  return result.trim();
}
const result8 = makeTitle("hello world");
// console.log(result);


// problem 9 
function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  return result;
}
const result9 = factorial(5);
// console.log(result);


// problem 10 
function pingPong(num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result += "PingPong, ";
    } else if (i % 3 === 0) {
      result += "Ping, ";
    } else if (i % 5 === 0) {
      result += "Pong, ";
    } else {
      result += i + ", ";
    }
  }
  return result;
}
const result10 = pingPong(10);
// console.log(result);











