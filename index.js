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
    return a+b
}
console.log(addNums(5, 6))

// 2
const evenOdd = (num) => (num % 2 === 0) ? "Even" : "Odd"
console.log(evenOdd(5))
console.log(evenOdd(6))
console.log(evenOdd(23))

// 3 reverse string
function reverseString(str) {
    return str.split('').reverse().join('');
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
    const reversed = word.split('').reverse().join('');
    return word.toLowerCase() === reversed.toLowerCase();
  }

  console.log(isPalindrome("racecar"));

// 6 vowel counter
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }

  console.log(countVowels("Hello World"));

// 7 Fibinacci

function generateFibonacci(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence.slice(0, n);
  }

  // Example usage:
  console.log(generateFibonacci(5));
  console.log(generateFibonacci(8));
