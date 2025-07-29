// Main array to store data
let formData = [];


function addData(){

let firstName = document.getElementById("first_name").value;
console.log(firstName)
let lastName = document.getElementById("last_name").value;
console.log(lastName)
let email = document.getElementById("email").value;
console.log(email)


// Store our data temporalily
let dataRow = [firstName, lastName, email];
console.log(dataRow)

// Adding dataRow to the formData
formData.push(dataRow)


displayData();
}

// Function to display the data collected and stored 
function displayData(){

let tableBody = document.getElementById("dataTable");


// Clear the table to avoid duplicate rows



// We loop through the formData and we create a new row for the each data collected



for ( let i = 0; i < formData.length; i++){

// Add a row with a table data
tableBody.innerHTML += "<tr><td>" + formData[i][0] + "</td><td>" + formData[i][1] + "</td><td>" + formData[i][2] + "</td></tr>";


 }

}



