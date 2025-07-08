// 1. Strings

// - Used For storing texts
// - They are written using quotes

// let a = "John Doe";
// console.log(a)

// String methods in Javascript

// 1. String Length

// - The length property returns the lenght of a string

// let text = "ABCDEFGHIJ";
// console.log(text.length);

// 2. String Slice

// - Extracts a part of a string and returns the extracted
// part in a new string
// - It takes 2 parameters ie start position and end position
// - For the spaces and commas also count
//  - For the last digit to appear you should add one

// let fruits = "Banana, Mango, Grapes, Orange, Apple ";
// let portion = fruits.slice(8,13)
// let apple = fruits.slice(-6, -1)
// let grapes = fruits.slice(15, 21)
// console.log(portion)
// console.log(apple)
// console.log(grapes)

// Quiz -  Extract Apple and Grapes

// 3. String toUpperCase
// - Used to convert a string to upper case

// let text = "My name is Chris";
// let text2 = text.toUpperCase();
// console.log(text2);

// 4. String toLowerCase
// - Used to convert a string to lower case

// let sentence = "GOOD MORNING, HOW ARE YOU DOING?"
// let sentence2 = sentence.toLowerCase();
// console.log(sentence2)

// Quiz
// You have the following declared variable 
// let nam = "Kenneth, Stacy, Samuel, Peter, Grace, Chris";


// Required

// 1. Extract the nam Samuel
// 2. Convert the extracted nam into Upper case
// 3. Find the length of the extracted nam 


// var names = "Kenneth, Stacy, Samuel, Peter, Grace, Chris";
// console.log(names)
// var extracted = names.slice(16, 22);
// console.log(extracted);
// var caps = extracted.toUpperCase();
// console.log(caps)
// var urefu = caps.length
// console.log(urefu);


// 5. String Concat
// Used to join two or more strings

// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat(" " ,text2);
// console.log(text3);

// 6. String Replace

// Returns a new string with some or all matches of a pattern
// replaced by a replacement

// Only the first Occurence is replaced

// string.replace(searchValue, newValue)
// Inorder for you to replace everything we are going to be using a regular expression
// This is possible through a g flag and i flag for maintaing the case


// let text1 = "I love Javascript.Javascript is fun.javascript is Amazing";
// let text2 = text1.replace(/Javascript/gi , "Python");
// console.log(text2);

// 7. String Repeat
// Returns a string with a number of copies of a string
// Returns a new string
// Does not change the original string

// let text1 = "Hello World!";
// let text2 = text1.repeat(10);
// console.log(text2);

// 8. String Trim
// Helps us to remove whitespaces from both sides of a string
// We use the property trim(), trimStart() and trimEnd() 

// let text1 = "          Hello World          ";
// let text2 = text1.trim()
// console.log(text2);


// 9. Split

// It is used to split a string into an array of substrings based on a specified separator

// string.split(separator, limit)

// Separator - The character, string or regular expression that decides where to split.
// limit - The maximum number of substrings to return.


// Example 1 - Split by Space
// let sentence = "Javascript is amazing" ;
// console.log(sentence)
// let words =  sentence.split(" ")
// console.log(words)

// // Example 2 - Split by Comma
// let fruits = "Apple,Banana,Mango,Orange";
// console.log(fruits);
// let lists = fruits.split(",");
// console.log(lists)

// // Example 3 - Split Into Characters
// let word = "hello";
// let letters = word.split("")
// console.log(letters)

// // Example 4  - Split with limit
// let colors = "Red-Blue-Green-Yellow";
// console.log(colors);
// let parts = colors.split("-", 3)
// console.log(parts);

// Clean up the following variable to give the clean version in lower case. Using inbuilt methods in the string class
// f_name = “  JOHn  .” to “john”
// Slice the below string to get you the resulting sentence:
// sentence_one = “The Dog Breed is German Shepherd” only display “Breed is German”
// sentence_two = “Defeats for the Clinton forces, this was her moment of triumph” only display “Clinton forces”
// Split the below sentence using a semicolon i.e ; And display length of the result. 
// “The lazy dog; ran so fast; it hit the wall.” 



let f_name = "  JOHn  .";
console.log(f_name)
let f_names  = f_name.trim();
console.log(f_names)
let f_namess  = f_name.slice(0,6);
console.log(f_namess)
let f_namesss = f_namess.toLowerCase()
console.log(f_namesss)