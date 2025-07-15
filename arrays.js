
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

let groupA = ["Alice", "Bob", "James", "Morgan"];
console.log("This is group A students -->",groupA)
let groupB = ["Chris", "Ken", "Sam", "Stacy"];
console.log("This is group B students -->",groupB)
let groupC = ["Peter", "Grace", "Allan", "Bruno"];
console.log("This is group C students -->",groupC)
// concat method

let total = groupA.concat(groupB, groupC);
console.log("This is are the total students -->",total)

// // indexOf method
// console.log(total.indexOf("Ken"))
// console.log(total.indexOf("Grace"))

// // slice method
// let part = total.slice(5,10)
// console.log(part)

// // Includes method 
// console.log(total.includes("Sam"))


// Reverse method 
total.reverse();
console.log(total)


