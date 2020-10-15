// Assignment Code
var generateBtn = document.querySelector("#generate");

// Writes password to the password output field on index.html
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

// When Generate Password button clicked on index.html
generateBtn.addEventListener("click", writePassword);

//Functionality Code
//Function that generates a password
function generatePassword() {
	//Prompts user for desired password length
	while (true) {
		var pwdLength = prompt("How many characters in length is your password?");
		//Password length limiters
		if ((pwdLength >= 8) && (pwdLength <= 128)) {
			break;
		} else (alert("Your password must be at least 8 characters long and no more than 128 characters in length."));
	}

	//User chooses desired character types
	while (true) {
		var pwdLower = confirm("Add lowercase characters?");
		var pwdUpper = confirm("Add uppercase characters?");
		var pwdNumeric = confirm("Add numerical characters?");
		var pwdSpecial = confirm("Add special characters?");
		//Password must contain at least one character type
		if ((pwdLower === true) || (pwdUpper === true) || (pwdNumeric === true) || (pwdSpecial === true)) {
			break;
		} else (alert("Your password must contain at least one type of character."));
	}

	//Generates fraction so that password length is divided evenly by char types
	function fractioner() {
		var num = 0;
		var charTypeArray = [pwdLower, pwdUpper, pwdNumeric, pwdSpecial];
		for (i = 0; i <charTypeArray.length; i++) {
			if (charTypeArray[i] === true) {
				num++;
			}
		}
		return num;
	}

	//Generates string of characters
	function stringMaker(length, fraction, asciiMin, asciiMax) {
		var str = '';
		for (i = 0; i < (length/fraction); i++) {
			str += (String.fromCharCode(randomNum(asciiMin, asciiMax)));
		}
		return str;
	}

	bigStr = '';
	//Parameters for specific types of characters
	if (pwdLower) {
		bigStr += stringMaker(pwdLength, (fractioner()), 97, 122);
	}
	if (pwdUpper) {
		bigStr += stringMaker(pwdLength, (fractioner()), 65, 90);
	}
	if (pwdNumeric) {
		bigStr += stringMaker(pwdLength, (fractioner()), 48, 57);
	}
	if (pwdSpecial) {
		bigStr += stringMaker(pwdLength, (fractioner()), 33, 47);
	}
	//String Before randomize
	console.log(bigStr);
	//Converting string to array
	var bigArray = bigStr.split('');
	//Blank string to return at end of function
	var masterStr = '';
	//String shuffler
	for (i = 0; i < (bigArray.length - 1); i++) {
		var j = randomNum(0, (bigArray.length));	//Random index j
		var temp = bigArray[i];						//Stored element value from array
		bigArray[i] = bigArray[j];					//Swap element index i to index j
		bigArray[j] = temp; 						//Copy element value to index j
	}
	masterStr = bigArray.join('');
	return masterStr;
	
};

// return bigStr.concat(lowerStr, upperStr, numericStr, specialStr);

//console.log(String.fromCharCode(65));

//Random uppercase 97-122
Math.random

//Random Number Generator Function
function randomNum(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

//console.log(randomNum(97, 122));
// console.log(String.fromCharCode(randomNum(97, 122)));

// function lowerMaker() {
// 	var word = '';
// 	for (i = 0; i < 10; i++) {
// 		word += (String.fromCharCode(randomNum(97, 122)));
// 	}
// 	console.log(word);
// }

// var lowerBool = false;

// if (lowerBool === true) {
// 	lowerMaker();
// 	console.log("On");
// } else {
// 	console.log("Off")
// }


//Generates random lowercase characters
	// while (pwdLower) {
	// 	function lowerMaker(length) {
	// 		var str = '';
	// 		for (i = 0; i < 10; i++) {
	// 			str += (String.fromCharCode(randomNum(97, 122)));
	// 		}
	// 		return str;
	// 	}
	// 	return bigStr.concat(lowerMaker(pwdLength));
	// }
	//Generates random uppercase characters
	// while (pwdUpper) {
	// 	function upperMaker(length) {
	// 		var str = '';
	// 		for (i = 0; i < 10; i++) {
	// 			str += (String.fromCharCode(randomNum(65, 90)));
	// 		}
	// 		return str;
	// 	}
	// 	return bigStr.concat(upperMaker(pwdLength));
	// }
	// //Generates random numeric characters
	// while (pwdNumeric) {
	// 	function numericMaker(length) {
	// 		var str = '';
	// 		for (i = 0; i < 10; i++) {
	// 			str += (String.fromCharCode(randomNum(48, 57)));
	// 		}
	// 		return str;
	// 	}
	// 	return numericStr;
	// }
	// //Generates random special characters
	// while (pwdSpecial) {
	// 	function specialMaker(length) {
	// 		var str = '';
	// 		for (i = 0; i < 10; i++) {
	// 			str += (String.fromCharCode(randomNum(33, 47)));
	// 		}
	// 		return str;
	// 	}
	// 	return specialStr;
	// }
	//Combines strings

// var lowerBank = String.fromCharCode(randomNum(97, 122));
// var upperBank = String.fromCharCode(randomNum(65, 90));
// var numericBank = String.fromCharCode(randomNum(48, 57));
// var specialBank = String.fromCharCode(randomNum(33, 47));
// console.log(lowerBank, upperBank, numericBank, specialBank);