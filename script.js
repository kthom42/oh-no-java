// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function getRandomUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  // const symbol = '!@#$%^&*(){}[]=<>/,.|~?';
  var symbol = "!@#$%^&*(){}[]=<>/,.|~?";
  return symbol[Math.floor(Math.random() * symbol.length)];
}

var randomPass = [
  getRandomUpperCase,
  getRandomLowerCase,
  getRandomNumber,
  getRandomSymbol,
];

function getRandomFunc() {
  return randomPass[Math.floor(Math.random() * Object.keys(randomPass).length)];
}

function generatePassword() {
  var password = "";
  var passwordLength = Math.random() * (128 - 8) + 8;
  for (var i = 1; i <= passwordLength; i++) {
    password += getRandomFunc()();
  }
  //check with regex
  var regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,128}$/;
  if (!password.match(regex)) {
    password = generatePassword();
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// var functionArray = {
// getRandomLower: function() {
//   return String.fromCharCode(Math.floor(Math.random() * 26 + 97))
// }

// getRandomUpper: function() {
//   return String.fromCharCode(Math.floor(Math.random() * 26 + 97))
// }

// getRandomNumber: function() {
//   return String.fromCharCode(Math.floor(Math.random() * 10 + 48))
// }

// getRandomSpecialCharacters: function() {
//   const specialCharacters = "!@#$%^&*()[]{}=+/.";
// return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
// }

// }

// if (numbers === true) {
//   minimumNumbers = functionArray.getRandomNumber();
//   minimumCount++;

// }

// if (lowerCases === true) {
//   minimumLowerCases = functionArray.getRandomLower();
//   minimumCount++;

// }

// if (upperCases === true) {
//   minimumUpperCases = functionArray.getRandomUpper();
//   minimumCount++;

// }

// if (special === true) {
//   minimumSpecialCharacters = functionArray.getRandomSpecialCharacters();
//   minimumCount++;

// }

// // empty string variable for the for loop below
// var randomPasswordGenerated = "";

// // loop getting random characters
// for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
//   var randomNumberPicked = Math.floor(Math.random() * 4);

//   randomPasswordGenerated += randomNumberPicked;

// }

// // to make sure characters are added to the password
// randomPasswordGenerated += minimumNumbers;
// randomPasswordGenerated += minimumLowerCases;
// randomPasswordGenerated += minimumUpperCases;
// randomPasswordGenerated += minimumSpecialCharacters;

// return randomPasswordGenerated;
