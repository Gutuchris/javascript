// LOOPS
// They are control structures that allow you to repeat a block of code multiple times, until a certain condition is met.

// There are 2 types of loops - for loop and while loop


       // Syntax
// for (initialiazion; condition ; update){
//     // code block 
// }

// 1.For Loop

// Example 1
// - Print a number from 1 to 5


// for (let i = 0; i<=5 ; i++){
//     console.log(i);
// }

// for(let i = 500; i>=450; i--){
//     console.log(i)
// }

// Print numbers from 80 to 100 but only even numbers


 
// for (let i = 80; i <= 100; i++){
// if(i % 2 == 0){
//     console.log(i)
//     }
// }



// Odd Numbers

// Method 1

// for (let i = 81; i<=100; i+=2){

//    console.log(i)
// }


//  Method 2 

//  for  (
// let i = 80; i<= 100;  i++){
 
//  if(i % 2 !== 0){

//       console.log(i)
// }
//  }


// 2.While Loop
// Used when you are not sure how many times you want to loop

//  Syntax

// while (condition){
//     code block
// }


// Example 1

// let count = 5
// while (count > 0){
//     console.log(count)
// }

// Example 2

// let password = "";
// while (password !== "chris123"){
   
//     password = prompt("Enter your Password: ")
// }


// Example 3

// let i = 1
// while (i <= 10 ){
//     console.log(i)
//     i++
// }


// Example 4

// let count = 5;
// while (count > 0){
//     console.log(count)
//     count --
// }


// Break
// - It is used  to stop a loop early, even if the condition is still true.


//  Example 1

// let i = 0

// while (i < 100){
//     console.log(i)

// if (i === 99){
//     break;
//            }
  
//   i++
// }


// Example 2


// let secret = 7
// let guess;

// while (true){
//     guess = parseInt(prompt("Guess a number: "));

// if (guess === secret){
//   alert("You guessed right😎");
//   break;
// }
// else{
  
//   alert("Try again😡")

// }


// }


// Question 

// Create a real world password retry system similar to the ones on your laptops or any device 
// Use variables, while loop and if statement
// But a user gets 5 attempts to try entering the password if not they are denied the access 

   // Solution

// The correct password
let correctPassword = "1234";

// Number of attempts a user gets
let attempts = 0;

// What the user types
let input = "";


while (input !== correctPassword && attempts < 5){
 
    input = prompt("Enter your Password");
    attempts++
}

if (input === correctPassword){
    alert("✅ Access Granted ");

}
else{
    alert("❌ Access Denied")
}

