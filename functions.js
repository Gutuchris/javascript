
// Functions

// A function is a reusable block of code that perfoms a specific task
// A function is defined once, and then you call it as many times as you want

        // Syntax  

// function functionname (parameters){
// //    block of code to run when the funstion is called

// }
// call your function


// Example 1

// Define function
// function greet(){

//    console.log("Hello")

// }
// // Call function
// greet();

// Example 2

// function nam(){

//     console.log("My name is Chris")
// }

// nam()


// Example 3

// function greet(name) {

//  console.log("Welcome" + name)

// }

// greet()


// function decoration(color){

//    console.log("My favourite Colour is" + " " + color)

// }

// decoration("Black")


//  Create a function which tells your current age




// function years(age){

//    console.log("I am " + age + " " + "years old") 

// }

// years("40")


// Example 4

// let a = 10;
// let b = 20;
// let c = a + b

// console.log(c)


// function add(a,b){
    
//     let c = a + b;
//     console.log("The sum is " + c)
     
// }
// add (100,250)


// function introduction(name, age, country){
//    console.log("My name is " + name + "I am " + age + " years old" + "and I live in " + country) 



// }

// introduction("Chris", "40 ", "Kenya")



// the base of a triangle is 10 and its height is 6 ,calculate the area of the triangle



// Using the return keyword

// Example 1
// function add (a,b){
//     console.log(a + b)
// }

// let result = add(10,20);
// console.log(result)


// Example 2
// function add (a,b){
//     return a + b
// }
// let result = add(10,20);
// console.log(result)



// Example 3

function calculateTax(price){
    return price * 0.15
}

let tax1 = calculateTax(100);
let tax2 = calculateTax(250);

console.log(tax1, tax2)

