var fruits = [
  "Apple",
  "Banana",
  "Pear",
  "Strawberry",
  "Apricot",
  "Peach",
  "Plum",
];

// Calling the Array \\
console.log("---/ Fruits Array /---\n" + fruits);

// length() Method \\
var length = fruits.length;

console.log("---/ length() Method /---\nLength: " + length);

// indexOf() Method \\
// Reminder! Arrays start at 0! \\

console.log(
  "---/ indexOf() Method /---\nIndex of 0: " +
    fruits[0] +
    "\nIndex of 4: " +
    fruits[4]
);

// reverse() Method \\
var reversedArray = fruits.reverse();

console.log("---/ reverse() Method /---\nReversed Array: " + reversedArray);

// sort() Method \\
var sortedArray = fruits.sort();

console.log("---/ sort() Method /---\nSorted Array: " + sortedArray);

// Coding Interview Practice! \\
// How do we check if a string is a Palindrome?

// For reference- Palindromes are words that
// are spelled the same forwards and backwards!

// Example phrase: "Oozy rat in a sanitary zoo"

// STEP 1 \\
// Create a variable with the phrase!
// Then, console.log to see the change!
var phrase = "Oozy rat in a sanitary zoo";

console.log(
  "---/ Original /---\nThe current variable looks like this: " + phrase
);

// STEP 2 \\
// Convert the string into all lowerCase or upperCase letters!
// Then, console.log to see the change!
var toLowerCasePhrase = phrase.toLowerCase();

console.log(
  "---/ Coverted to LowerCase /---\nThe current variable looks like this: " +
    toLowerCasePhrase
);

// STEP 3 \\
// Replace all spaces with an empty string
// *** Advanced Deep Dive: Regex ***
// * We will be covering what Regex is and how to write it
// * at a later module. For this example, here's the TLDR:
// * '\s' is the Regex for "whitespace"
// * '/g' is the "global" flag, applying it to the whole string
// What this method is saying in Human:
// "Find all the spaces globally and replace them with an empty string"
// Then, console.log to see the change!
var spacesReplaced = toLowerCasePhrase.replace(/\s/g, "");

console.log(
  "---/ Spaces Replaced /---\nThe current variable looks like this: " +
    spacesReplaced
);

// -- For a more readable code, reassign the variable to a new name
var forwardPhrase = spacesReplaced;

// STEP 5 \\
// Reverse the string
// Then, console.log to see the change!
var backwardPhrase = forwardPhrase.split("").reverse().join("");
console.log(
  "---/ Reversed String /---\nThe current variable looks like this: " +
    backwardPhrase
);

// STEP 6 \\
// Time to get extra \\
// Use if/else logic to make the comparison Human readable
// Then, console.log to see the change!

console.log("Is the phrase from line 51 a Palindrome?");
if (backwardPhrase === forwardPhrase) {
  console.log("Yes, this phrase is a palindrome!");
} else {
  console.log("No, this phrase is NOT a palindrome!");
}

// Question: What does each variable look like after we've made all these
// crazy changes? Uncomment the following lines of code to check!
console.log(phrase);
console.log(toLowerCasePhrase);
console.log(spacesReplaced);
console.log(forwardPhrase);
console.log(backwardPhrase);

// Now we can utilize each step of our JS
// magic anywhere in our code! How neat!

// *** Advanced Deep Dive: Combining methods ***
// * How can we shorten our code by combining methods?
var combinedMethod = ["BANANA", "applE", "MaNGO"];
var combinedMethod = phrase.toString.toLowerCase;
console.log(combinedMethod);
