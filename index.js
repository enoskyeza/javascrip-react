/* Easy Challenges

Add Numbers:
Write a function that takes two numbers as arguments and returns their sum.

Even or Odd:
Create a function that determines whether a given number is even or odd. Return 'even' or 'odd' accordingly.

Reverse a String:
Write a function that reverses a string (e.g., "hello" becomes "olleh").

Find the Largest Number:
Write a function that takes an array of numbers and returns the largest number in the array.

Palindrome Checker:
Create a function that checks whether a given word is a palindrome (reads the same forwards and backwards).

Count Vowels:
Write a function that counts the number of vowels in a given string.

Fibonacci Sequence:
Create a function to generate the Fibonacci sequence up to a certain number of terms.

Find Factorial:
Write a function that calculates the factorial of a given number.

Remove Duplicates:
Create a function that removes duplicate elements from an array.

Title Case a Sentence:
Write a function that converts the first letter of each word in a sentence to uppercase.

*/

// 1
function addNums(a, b) {
  return a + b;
}
console.log(addNums(5, 6));

// 2
const evenOdd = (num) => (num % 2 === 0 ? "Even" : "Odd");
console.log(evenOdd(5));
console.log(evenOdd(6));
console.log(evenOdd(23));

// 3 reverse string
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));

// 4 largest number in array
function findLargestNumber(numbers) {
  if (numbers.length === 0) {
    return null; // Return null for an empty array
  }
  let largest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  return largest;
}

console.log(findLargestNumber([5, 2, 9, 1, 17, 4]));

// 5 Palindrome Checker

function isPalindrome(word) {
  const reversed = word.split("").reverse().join("");
  return word.toLowerCase() === reversed.toLowerCase();
}

console.log(isPalindrome("racecar"));

// 6 vowel counter
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("Hello World"));

// 7 Fibonacci

function generateFibonacci(n) {
  let sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence.slice(0, n);
}

console.log(generateFibonacci(5));
console.log(generateFibonacci(8));

// 8 Factorial

function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    let result = 1;
    for (let i = 2; i <= number; i++) {
      result *= i;
    }
    return result;
  }
}

console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(7));

// Remove duplicates

function removeDuplicates(arr) {
  return arr.filter((value, index, array) => array.indexOf(value) === index);
}

const originalArray = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(originalArray));

const arrayWithDuplicates = ["apple", "banana", "apple", "orange", "banana"];
console.log(removeDuplicates(arrayWithDuplicates));

// Title case a sentence

function titleCase(sentence) {
  return sentence
    .toLowerCase()
    .replace(/(^|\s)\S/g, (char) => char.toUpperCase());
}

console.log(titleCase("this is a sample sentence"));
console.log(titleCase("JavaScript is awesome"));

/*
Medium Challenges

Anagram Checker:
Create a function that checks if two given strings are anagrams of each other.

Array Chunking:
Write a function that divides an array into smaller arrays of a specified size.

Validate Email:
Create a function to validate whether a given string is a valid email address.

Flatten Array:
Write a function that flattens a nested array (e.g., [1, [2, [3]], 4] becomes [1, 2, 3, 4]).

Binary to Decimal Conversion:
Write a function that converts a binary number to its decimal equivalent.

Debounce Function:
Implement a debounce function that delays invoking a function after it's called until after a certain amount of time.

Deep Clone an Object:
Create a function that deeply clones a complex object (including nested objects and arrays).

Implement a Stack:
Create a stack data structure with push, pop, and peek methods.

Currying Function:
Implement a currying function that takes a function and some arguments and returns a function that can take further arguments.

Memoization:
Implement a memoization technique for a recursive function to improve its performance.
*/

// 1 Anagram checker

function isAnagram(str1, str2) {
  // Remove non-word characters and convert to lowercase
  const cleanStr1 = str1.replace(/[^\w]/g, "").toLowerCase();
  const cleanStr2 = str2.replace(/[^\w]/g, "").toLowerCase();

  // Sort the characters and compare the strings
  const sortedStr1 = cleanStr1.split("").sort().join("");
  const sortedStr2 = cleanStr2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));

// Array Chunking

function chunkArray(arr, size) {
  const chunkedArr = [];
  let index = 0;

  while (index < arr.length) {
    chunkedArr.push(arr.slice(index, index + size));
    index += size;
  }

  return chunkedArr;
}

console.log(chunkArray([1, 2, 3, 4, 5], 2));
console.log(chunkArray(["a", "b", "c", "d", "e"], 3));

// Email validation
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

console.log(validateEmail("test@example.com"));
console.log(validateEmail("invalid.email@com"));

// Flatten Array
function flattenArray(arr) {
  return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
}

console.log(flattenArray([1, [2, [3]], 4]));
console.log(flattenArray([['a', 'b'], 'c', ['d', ['e', 'f']]]));

// Convert binary to decimal

function binaryToDecimal(binary) {
  return parseInt(binary, 2);
}

console.log(binaryToDecimal('1010'));
console.log(binaryToDecimal('110110'));

// Debounce function

function debounce(func, delay) {
  let timerId;
  return function (...args) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function searchQuery(query) {
  console.log(`Searching for: ${query}`);
}

const debouncedSearch = debounce(searchQuery, 300);

debouncedSearch('JavaScript');
debouncedSearch('React');

// Deep clone object
function deepClone(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  let clone = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}

const originalObject = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA'
  }
};

const clonedObject = deepClone(originalObject);
console.log(clonedObject);

// Implement a stack

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0) {
      return "Underflow";
    }
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek());
console.log(stack.pop());

//  Currying function

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...nextArgs) {
        return curried.apply(this, args.concat(nextArgs));
      };
    }
  };
}


function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3));
console.log(curriedSum(1, 2)(3));

// Memorixzation