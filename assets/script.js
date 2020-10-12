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
function generatePassword() {
	//Prompts for password length
	while (true) {
		var pwdLength = prompt("How many characters in length is your password?");
		//Password length limiters
		if ((pwdLength > 8) && (pwdLength < 128)) {
			break;
		} else (alert("Your password must be at least 8 characters long and no more than 128 characters in length."));
	}
	//User chooses character types
	while (true) {
		var pwdLower = confirm("Add lowercase characters?");
		var pwdUpper = confirm("Add uppercase characters?");
		var PwdNumeric = confirm("Add numerical characters?");
		var pwdSpecial = confirm("Add special characters?");
		//Password must have one type of character
		if ((pwdLower === true) || (pwdUpper === true) || (PwdNumeric === true) || (pwdSpecial === true)) {
			break;
		} else (alert("Your password must contain at least one type of character."));
	}
}; 	

//console.log(String.fromCharCode(65));

//Random uppercase 97-122
Math.random

//Random Number Generator Function
function randomNum(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

//console.log(randomNum(97, 122));
console.log(String.fromCharCode(randomNum(97, 122)));

function lowerMaker() {
	var word = '';
	for (i = 0; i < 10; i++) {
		word += (String.fromCharCode(randomNum(97, 122)));
	}
	console.log(word);
	}

var lowerBool = false;

if (lowerBool === true) {
	lowerMaker();
	console.log("On");
} else {
	console.log("Off")
}
