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
	while (true) {
		var pwdLen = prompt("How many characters in length is your password?");
		if ((pwdLen > 8) && (pwdLen < 128)) {
			break;
		} else (alert("Your password must be at least 8 characters and no more than 128 characters in length."));
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
