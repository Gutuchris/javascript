// ARITHMETIC OPERATOR
// Symbols used to perform basic math operations

// 1. Addition (+)
// Used to add numbers

// 2.Subtraction (-)
// Used to subtract numbers

// 3.Multiplication (*)
// Used to multiply numbers

// 4.Division (/)
// Used to Divide numbers

// 5.Modulus (%)
// Used to display the remainder after division

// 6.Exponentiation  ( ** )
// Power of a number 

// Example for all
let a = 10;
let b = 3;
let e = a/b
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(Number.isInteger(Number(e.toFixed(2))));
console.log(a%b)
console.log(a**b)



// 7.Increment (++)
// Used to add one to a value

let c = 5;
c++;
console.log(c)



// 8.Decrement
// Subtracts one from a value

let d = 5;
d--;
console.log(d)
// Item 1
let item1 = "Milk";
let price1 = 60;
let quantity1 = 2;
let total1 = price1 * quantity1;

// Item 2
let item2 = "Bread";
let price2 = 50;
let quantity2 = 1;
let total2 = price2 * quantity2;

// Item 3
let item3 = "Eggs";
let price3 = 15;
let quantity3 = 6;
let total3 = price3 * quantity3;

// Subtotal (before tax)
let subtotal = total1 + total2 + total3;

// Tax = 10% of subtotal
let tax = subtotal * 0.10;

// Final total
let finalTotal = subtotal + tax;

// Print the receipt
console.log("🧾 Receipt");
console.log("----------------------------");
console.log(item1 + " x" + quantity1 + " = " + total1 + " KES");
console.log(item2 + " x" + quantity2 + " = " + total2 + " KES");
console.log(item3 + " x" + quantity3 + " = " + total3 + " KES");
console.log("----------------------------");
console.log("Subtotal: " + subtotal + " KES");
console.log("Tax (10%): " + tax.toFixed(2) + " KES");
console.log("Total: " + finalTotal.toFixed(2) + " KES");




