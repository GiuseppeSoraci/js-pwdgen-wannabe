var nickname = prompt("What's your name?");
var surname = prompt("What's your surname?");
var color = prompt("What's your favourite color?");
console.log(nickname, surname, color);

document.getElementById("password").innerHTML =  nickname + surname + color + 21;