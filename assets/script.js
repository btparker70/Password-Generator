// Assignment code
var generateBtn = document.querySelector("#generate");

// Generate random number
function randomNum(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

// Writes password to the textarea
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");
	passwordText.value = password;
}

// Event listener for Generate Password button
generateBtn.addEventListener("click", writePassword);

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

	// Generates random character for each character type
	var lowerBank = String.fromCharCode(randomNum(97, 122));
	var upperBank = String.fromCharCode(randomNum(65, 90));
	var numericBank = String.fromCharCode(randomNum(48, 57));
	var specialBank = String.fromCharCode(randomNum(33, 47));

	// Generates array of characters for password
	var charArray = [];
	var counter = 0;
	while (counter < pwdLength) {
		if (pwdLower) {
			charArray.push(String.fromCharCode(randomNum(97, 122)));
			counter++;
		}
		if (pwdUpper) {
			charArray.push(String.fromCharCode(randomNum(65, 90)));
			counter++;
		}
		if (pwdNumeric) {
			charArray.push(String.fromCharCode(randomNum(48, 57)));
			counter++;
		}
		if (pwdSpecial) {
			charArray.push(String.fromCharCode(randomNum(33, 47)));
			counter++;
		}
	}

//test start
//Array for on/off char type
	// var charTypeArray = [pwdLower, pwdUpper, pwdNumeric, pwdSpecial];
	// counter2 = 0;
	// while (counter2 < pwdLength) {
	// 	for (i = 0; i < pwdLength; i++) {
	// 		function generateChar(charType, asciiMin, asciiMax) {
	// 			charArray.push(String.fromCharCode(randomNum(asciiMin, asciiMax)));
				
	// 		}
	// 	}
	// }

//test end


	//Generates string of chars = password length without omitting any desired char types
	function stringMaker() {
		var str = '';
		for (i = 0; i < pwdLength; i++) {
			str += charArray[((i) % charArray.length)];
		}
		return str;
	}
	
	console.log("chararray " + charArray);
	console.log("tostring " + charArray.toString());
	console.log("stringMaker " + stringMaker());




	//Converting string to array
	var bigArray = (stringMaker()).split('');
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


	// //Generates fraction so that password length is divided evenly by char types
	// function fractioner() {
	// 	var num = 0;
	// 	var charTypeArray = [pwdLower, pwdUpper, pwdNumeric, pwdSpecial];
	// 	for (i = 0; i < charTypeArray.length; i++) {
	// 		if (charTypeArray[i] === true) {
	// 			num++;
	// 		}
	// 	}
	// 	return num;
	// }

	// //Generates string of characters
	// function stringMaker(length, fraction, asciiMin, asciiMax) {
	// 	var str = '';
	// 	for (i = 0; i < (length / fraction); i++) {
	// 		str += (String.fromCharCode(randomNum(asciiMin, asciiMax)));
	// 	}
	// 	return str;
	// }

	// bigStr = '';
	// //Parameters for specific types of characters
	// if (pwdLower) {
	// 	bigStr += stringMaker(pwdLength, (fractioner()), 97, 122);
	// }
	// if (pwdUpper) {
	// 	bigStr += stringMaker(pwdLength, (fractioner()), 65, 90);
	// }
	// if (pwdNumeric) {
	// 	bigStr += stringMaker(pwdLength, (fractioner()), 48, 57);
	// }
	// if (pwdSpecial) {
	// 	bigStr += stringMaker(pwdLength, (fractioner()), 33, 47);
	// }