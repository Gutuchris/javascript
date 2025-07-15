// Conditional Statements
// They are used to pass a condition in certain events and the output becomes positive when the condition has been met.


// 1. if Statement

// It runs a block of code only if a condition inside it evaluates to true.

 
     // Syntax //

// if (condition) {

//     // code that you are passing the condition
// }


// let temperature = 30;

// if (temperature > 25){

// console.log("It is very hot outside");

// }


// 2. if...else Statement

// It runs one block of code if the condition is true and another if it's false

    // Syntax //

// if (condition){
//     // code if the condition is true
// }
// else {
//     // code if the condition is false
// }


// let age = 20;
// if (age === 20){
//     console.log("You are 20 years old");
// }
// else{
//     console.log("You are not 20 years old");
// }



// let colour = "Black";

// if (colour == "White"){
//     console.log("That is your favourite colour");
// }  
// else{
//     console.log("That is not your favourite colour");
// }



// if... else if ... else Statement

// Used when you want to check multiple conditions

        // Syntax //

    
// if (condition){
//     // runs if condition 1 is true
// }
// else if (condition){
//     // runs if condition 2 is true

// }
// else{
//     // runs if none of the above are true
// }

let marks = 49;

if (marks >= 90){
    console.log("You have scored grade A");
}

else if (marks >= 70)   
    {
    console.log("You have scored grade B")
    }

else if (marks >= 50)
    {
    console.log("You have scored grade C")
    }

else{
    console.log("You have Failed")
    }