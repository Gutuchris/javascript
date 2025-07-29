// OBJECTS

// A special container that stores data in the form of key-value pairs.
// The key is like a label and the value is the data

      // Syntax 

// let objectName = {

//     key1: value1,
//     key2: value2,


// }

// Example 1

// let person = {

//    name: "Chris",
//    country: "Kenya",
//    gender:"Male",
//    age:"28",


// }

// console.log(person)

// Example 2

// let dog = {
//    name: "Bruno",
//    breed: "German Shepherd",
//    age: 4


// }
// console.log(dog)


// Accessing Object Values

// 1.Dot notation
// console.log(dog.name)
// console.log(dog.breed)

// 2.Bracket notation

// console.log(dog["name"])
// console.log(dog["breed"])

// 3.Adding New Properties 

// dog.color = "black"

// console.log(dog)


// 4.Updating Object Values
// dog.age = 6;
// dog["name"] = "Max"
// console.log(dog)


// 5. Deleting a Property

// delete dog.breed
// console.log(dog)


// 6.Nested Objects
// An object which has another object inside it



// let student = {
//   name:"Mary",

//   marks:{
//   math:90,
//   english:80
//   }

// }
// console.log(student.marks.math)



// 7.Array of Objects

// let students = [

//     {name: "Max",
//      grade:"A"
//     },

//     {
//     name: "Mary",
//     grade:"B"

//     }


// ]
// console.log(students[0].name)

// 8.Using multiple Values in  an object

// let person = {

//    name: "Chris",
//    citizenship: ["Kenya", "USA"],
//    gender:"Male",
//    age:"28",


// }
// console.log(person)


let user = {
    nam: ["Chris", "Ken", "Sam", "Peter"],
    age: [25, 40, 30, 20],
    greet: function(){
    
        console.log("Hello" + " " + user.nam[1] + " " + "you are " + " " + user.age[3] + " " + "years old.") 

    }

}


user.greet();
