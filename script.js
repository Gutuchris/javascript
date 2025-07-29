function getName(){
let name = document.getElementById("username").value;

document.getElementById("main").innerText = "Welcome" + " " + name + "🥳";
document.getElementById("main").style.color = "green";

}