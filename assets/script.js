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

// Function that generates a password
function generatePassword() {
	// Prompts user for desired password length
	while (true) {
		var pwdLength = prompt("How many characters in length is your password?");
		// Password length limiters
		if ((pwdLength >= 8) && (pwdLength <= 128)) {
			break;
		} else (alert("Your password must be at least 8 characters long and no more than 128 characters in length."));
	}

	// User chooses desired character types
	while (true) {
		var pwdLower = confirm("Add lowercase characters?");
		var pwdUpper = confirm("Add uppercase characters?");
		var pwdNumeric = confirm("Add numerical characters?");
		var pwdSpecial = confirm("Add special characters?");
		// Password must contain at least one character type
		if ((pwdLower === true) || (pwdUpper === true) || (pwdNumeric === true) || (pwdSpecial === true)) {
			break;
		} else (alert("Your password must contain at least one type of character."));
	}

	// Generates array of characters for password
	var generatedChars = [];
	var counter = 0;
	while (counter < pwdLength) {
		if (pwdLower) {
			generatedChars.push(String.fromCharCode(randomNum(97, 122)));
			counter++;
		}
		if (pwdUpper) {
			generatedChars.push(String.fromCharCode(randomNum(65, 90)));
			counter++;
		}
		if (pwdNumeric) {
			generatedChars.push(String.fromCharCode(randomNum(48, 57)));
			counter++;
		}
		if (pwdSpecial) {
			generatedChars.push(String.fromCharCode(randomNum(33, 47)));
			counter++;
		}
	}

	// Trims password to length without omitting any desired char types
	function stringMaker(length, array) {
		var str = '';
		for (i = 0; i < length; i++) {
			str += array[((i) % array.length)];
		}
		return str;
	}

	// Define unshuffled string
	var trimmedChars = stringMaker(pwdLength, generatedChars);

	// String shuffler
	function arrayShuffler(str) {;
		array = str.split('');
		for (i = 0; i < (array.length - 1); i++) {
			var j = randomNum(0, (array.length));	//Random index j
			var temp = array[i];					//Stored element value from array
			array[i] = array[j];					//Swap element index i to index j
			array[j] = temp; 						//Copy element value to index j
		}
		var shuffled = array.join('');
		return shuffled;
	}
	// Shuffled string
	return arrayShuffler(trimmedChars);
};