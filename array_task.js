
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
10.Suppose each fruit in finalCart costs $2.345 ,calculate the total cost and round it to 2 decimal places 
using number methods

NB - Use console.log to display each soln

*/

      // SOLN
let cart1 = ["apple", "banana"];
console.log(cart1)
let cart2 = ["orange", "grape"];
console.log(cart2)

cart1.push("Kiwi");
console.log("1.",cart1)

cart2.unshift("mango");
console.log("2.",cart2)

cart1.pop();
console.log("3.",cart1)

cart2.shift();
console.log("3.",cart2)

let finalCart = cart1.concat(cart2);
console.log("4.",finalCart)

console.log("5",finalCart.includes("banana"))

let middLeFruits = finalCart.slice(1,3);
console.log("6.", middLeFruits)


finalCart.reverse();
console.log("7.",finalCart)

