// ASSIGNMENT OPERATORS

// They are used to assign values to variables
// They are also used to perfom operations and assign the result at the same time

// 1. Simple Assignment (=)
// Assigns the right hand value to the left hand variable

// let x = 10;
// console.log(x)

// 2. Add and Assign (+=)
// Adds the right-hand value to the variable and updates the variable.

// let x = 10;
// x+=90;
// console.log(x);


// 3. Subtract and Assign (-=)
// Subracts the right-hand value and assigns the result to the variable

// let x = 10;
// x-=5;
// console.log(x)

// 4. Multiply and Assign (*=)
// Multiplies the variable by the right-hand value

// let x = 16;
// x *= 10;
// console.log(x);

// 5.Divide and Assign (/=)

// Divides the variable by the right hand value

// let x = 45;
// x /= 5;
// console.log(x);

// 6. Modulus and Assign (%=)

// let x = 13;
// x %= 5;
// console.log(x)

// 7. Exponentiation and Assign (**=)

// let x = 2;
// x **= 3;
// console.log(x)

// Example 1

// Savings in a Bank
// let savings = 1000;

// Interest from the Bank
// savings += 200;

// Spendings

// savings -= 500;

// Bank Balance

// console.log(savings);



// Example 2

// let x = 4;
// let y = 12;


// x += 6;
// y -= 3;
// x *= 2;
// y /= 3;
// x %= 5;
// y **= 2;


// What is the final value of x and y?
// x = 0 and y = 9

// Example 3


/*
Sarah just started tracking her savings

- She opened her account with kes 2000
- She earned kes 500 from freelancing
- She bought groceries worth kes 300
- Her boss doubled her total savings as a bonus
- She gave away a quarter of her money to charity
- She found kes 100 in her old bag and added it to her savings
- Finally,she split the total equally among 3 investment plans and kept the remainder

Required
1. Create a variable called savings and initialize it
2. Use only Assignment Operators
3. Console,log how much Sarah is left With

*/

// Solution


let savings = 2000;
// Earns 500
savings += 500;
// Groceries
savings -= 300;
// Boss doubles her total savings
savings *= 2;
// Charity
savings *= 0.75;
// Findings
savings += 100;
// Splittings among investments
savings %=3;
console.log(savings)




