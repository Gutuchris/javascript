
// ARRAYS

// It is used to store multiple values in a single variable
// Syntax

// let variable = ["value", "value"]


// let colors = ["Red", "Green", "Blue"]
// console.log(colors)


// let names = ["John", "Alice", "Bob"];
// console.log(names)

// let empty = []
// console.log(empty)


// ARRAY METHODS

// 1.push() - Used to add a value at the end of the array

// let num = [1,2,3];
// console.log("Normal values -->",num)
// num.push(4);
// console.log("Using push method -->",num)


// // 2.pop() - Removes a value from the end of an array

// num.pop()
// console.log("Using pop method -->",num)


// // 3.unshift() - Adds a value at the beginning

// num.unshift(0);
// console.log("Using unshift method -->",num)


// // 4.shift() - Removes a value from the beginning of an array
// num.shift();
// console.log("Using shift method -->",num)

// 5.concat - Used to merge two arrays

// let a = [1,2];
// console.log(a)
// let b = [3,4];
// console.log(b)
// let c = a.concat(b);
// console.log(c)


// let groupA = ["Alice", "Bob", "James", "Morgan"];
// console.log("This is group A students -->",groupA)
// let groupB = ["Chris", "Ken", "Sam", "Stacy"];
// console.log("This is group A students -->",groupB)
// let groupC = ["Peter", "Grace", "Allan", "Bruno"];
// console.log("This is group A students -->",groupC)
// let total = groupA.concat(groupB, groupC);
// console.log("This is are the total students -->",total)
// let part = total.slice(5,10)
// console.log(part)


// 6.slice(start,end) - Used to extract part of an array

// let letters = ["a", "b", "c", "d"];
// console.log(letters)
// let part = letters.slice(1,4)
// console.log(part)


// 7.indexOf() - Used to find an index of an item



// let groupA = ["Alice", "Bob", "James", "Morgan"];
// console.log("This is group A students -->",groupA)
// let groupB = ["Chris", "Ken", "Sam", "Stacy"];
// console.log("This is group A students -->",groupB)
// let groupC = ["Peter", "Grace", "Allan", "Bruno"];
// console.log("This is group A students -->",groupC)
// let total = groupA.concat(groupB, groupC);
// console.log("This is are the total students -->",total)

// console.log(total.indexOf("Ken"))
// console.log(total.indexOf("Grace"))

// let part = total.slice(5,10)
// console.log(part)

// 8.includes() - Used to check if an item exists

// let groupA = ["Alice", "Bob", "James", "Morgan"];
// console.log("This is group A students -->",groupA)
// let groupB = ["Chris", "Ken", "Sam", "Stacy"];
// console.log("This is group B students -->",groupB)
// let groupC = ["Peter", "Grace", "Allan", "Bruno"];
// console.log("This is group C students -->",groupC)
// // concat method

// let total = groupA.concat(groupB, groupC);
// console.log("This is are the total students -->",total)

// // indexOf method
// console.log(total.indexOf("Ken"))
// console.log(total.indexOf("Grace"))

// // slice method
// let part = total.slice(5,10)
// console.log(part)

// // Includes method 
// console.log(total.includes("Sam"))

// 9.reverse() - Used to reverse the array

// let groupA = ["Alice", "Bob", "James", "Morgan"];
// console.log("This is group A students -->",groupA)
// let groupB = ["Chris", "Ken", "Sam", "Stacy"];
// console.log("This is group B students -->",groupB)
// let groupC = ["Peter", "Grace", "Allan", "Bruno"];
// console.log("This is group C students -->",groupC)
// // concat method

// let total = groupA.concat(groupB, groupC);
// console.log("This is are the total students -->",total)

// // indexOf method
// console.log(total.indexOf("Ken"))
// console.log(total.indexOf("Grace"))

// // slice method
// let part = total.slice(5,10)
// console.log(part)

// // Includes method 
// console.log(total.includes("Sam"))


// Reverse method 
// total.reverse();
// console.log(total)



/*

QUESTION

You are given 2 arrays:

let cart1 = ["apple", "banana"];
let cart2 = ["orange", "grape"]

Required:
1.Add kiwi to the end of the cart1.
2.Add mango to the beginning of cart2.
3.Remove the last item from cart1 and the first item from cart2.
4.Combine cart1 and cart2 into a new array callled finalCart.
5.Check if banana is still in finalCart.
6.Slice the middle two fruits from finalCart into a new array middleFruits.
7.Reverse finalCart.
8.Convert all items in middleFruits to uppercase.
9.Replace GRAPE with PINEAPPLE in the middLeFruits.
10.Suppose each fruit in finalCart cocts $2.345 ,calculate the total cost and round it to 2 decimal places 
using number methods

NB - Use console.log to display each soln

*/

// 10.sort() - Arranges items in an array alphabetically

// let fruits = ["banana", "apple", "mango", "orange"];
// console.log(fruits)
// fruits.sort();
// console.log(fruits)

let nums = [100, 20, 3];
nums.sort();

console.log(nums)

// 11.join() - It is used to join all items in array into a single string

// let words = ["I" , "love", "coding", "very" , "much"]
// console.log(words)

// let sentence = words.join(" ");
// console.log(sentence)

// let sentence2 = words.join();
// console.log(sentence2)


// 12.map() 
// Used to create  a new array by transforming or mapping each item of an existing array using a callback function


// Syntax

// array.map(function(CurrentValue, index, array))


// let numbers = [1,2,3]
// console.log(numbers)
// let  doubled = numbers.map(num => num * 2);
// console.log(doubled)

// Convert this into uppercase
// let names = ["alice", "bob", "chris"];

// // Convert the numbers into strings
// let numbers = [1,2,3,4,5]
// let num2 =numbers.map(numbers => numbers.toString())
// console.log(num2)
// // Get the first letters
// let words = ["Dog", "Cat", "Elephant"]
// let firstLetter = words.map(word => word[0]);
// console.log(firstLetter)