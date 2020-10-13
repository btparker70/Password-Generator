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
		if ((pwdLength >= 8) && (pwdLength <= 128)) {
			break;
		} else (alert("Your password must be at least 8 characters long and no more than 128 characters in length."));
	}
	//User chooses character types
	while (true) {
		var pwdLower = confirm("Add lowercase characters?");
		var pwdUpper = confirm("Add uppercase characters?");
		var pwdNumeric = confirm("Add numerical characters?");
		var pwdSpecial = confirm("Add special characters?");
		//Password must have one type of character
		if ((pwdLower === true) || (pwdUpper === true) || (pwdNumeric === true) || (pwdSpecial === true)) {
			break;
		} else (alert("Your password must contain at least one type of character."));
	}
	

	//Generates string of characters
	function stringMaker(length, asciiMin, asciiMax) {
		var str = '';
		for (i = 0; i < length; i++) {
			str += (String.fromCharCode(randomNum(asciiMin, asciiMax)));
		}
		return str;
	}

	bigStr = '';
	//Parameters for specific types of characters
	if (pwdLower) {
		bigStr += stringMaker(pwdLength, 97, 122);
	}
	if (pwdUpper) {
		bigStr += stringMaker(pwdLength, 65, 90);
	}
	if (pwdNumeric) {
		bigStr += stringMaker(pwdLength, 48, 57);
	}
	if (pwdSpecial) {
		bigStr += stringMaker(pwdLength, 33, 47);
	}
	//String Before randomize
	console.log(bigStr);
	//Converting string to array
	var bigArray = bigStr.split('');
	//Blank string to return at end of function
	var masterStr = '';
	//String shuffler
	for (i = 0; i < (bigArray.length - 1); i++) {
		//Random index j
		var j = randomNum(0, (bigArray.length));
		//Stored element value from array
		var temp = bigArray[i];
		//Swap element index i to index j
		bigArray[i] = bigArray[j];
		//Copy element value to index j
		bigArray[j] = temp;
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