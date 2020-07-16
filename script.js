// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
	var passwordLength = prompt("What's the length of the password?");
  var includeLowerLetters = confirm("Would you like to include lower case letters?");
  var includeUpperLetters = confirm("Would you like to include Upper case letters?");
  var includeSpecialChar = confirm("Would you like to include special characters?");
	var includeNumbers = confirm("Would you like to include numbers?");
	//var password = generatePassword();
	var passwordText = document.querySelector("#password");
	var password = "";
	for (var i = 0; i < passwordLength; i++) {
		password =
			password + generateRandomCharacter(includeNumbers, includeLowerLetters,includeUpperLetters,includeSpecialChar);
	}
	passwordText.value = password;
}
function generateRandomCharacter(includeLowerLetters, includeUpperLetters,includeNumbers,includeSpecialChar) {
	var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
	var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	var list = [];
	if (includeLowerLetters) {
		list = list.concat(alphaLower);
  }
  if (includeUpperLetters) {
    list = list.concat(alphaUpper);
  }
	if (includeNumbers) {
		list = list.concat(numbers);
  }
  if (includeSpecialChar) {
    list = list.concat(specialChar);
  }
	var randomNumber = Math.random();
	var randomValue = list.length * randomNumber;
	var randomIndex = Math.floor(randomValue);
	var randomCharacter = list[randomIndex];
	return randomCharacter;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
