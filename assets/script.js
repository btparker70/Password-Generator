// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Function That generates password
function generatePassword() {};

console.log(String.fromCharCode(65));

//Random uppercase 97-122
Math.random

//Random Number Generator Function
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(randomNum(97, 122));