//Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

function reverseString(inputString) {
  let reversedString = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString.charAt(i);
  }
  return reversedString;
}

let inputStr = "Lemon";
let result = reverseString(inputStr);
console.log(result);


// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

function sumPositiveNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}


const inputArray = [7, 5, 10, -3, 10];
const result1 = sumPositiveNumbers(inputArray);
console.log(result1);


// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 
function findMostFrequentElement(arr) {
  const frequencyMap = arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});

  return parseInt(Object.keys(frequencyMap).reduce((a, b) => frequencyMap[a] > frequencyMap[b] ? a : b));
}


const Array = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const result2 = findMostFrequentElement(inputArray);
console.log(result2);



// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
function calculate(num1, operator, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return 'Invalid operator';
  }
}

const number1 = 5;
const number2 = 3;
const operator = '+';
const result3 = calculate(number1, operator, number2);
console.log(result3);


// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
function generateRandomPassword(length) {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
  }

  return password;
}


const passwordLength = 12;
const randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword);



// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.
function romanToInt(roman) {
  const romanNumeralMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let result4 = 0;

  for (let i = 0; i < roman.length; i++) {
    const currentVal = romanNumeralMap[roman[i]];
    const nextVal = romanNumeralMap[roman[i + 1]];

    if (nextVal > currentVal) {
      result += nextVal - currentVal;
      i++; 
    } else {
      result4 += currentVal;
    }
  }

  return result4;
}

console.log(romanToInt("IX"));

// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
function findSecondSmallest(arr) {
  if (arr.length < 2) {
    return "Array must have at least two elements.";
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
      secondSmallest = arr[i];
    }
  }

  if (secondSmallest === Infinity) {
    return "There is no second smallest element in the array.";
  }

  return secondSmallest;
}

// Example usage:
const inputArray2 = [5, 2, 8, 1, 6, 4];
const result5 = findSecondSmallest(inputArray2);
console.log(result5);


