// Assignment Code

var generateBtn = document.querySelector("#generate");

function getOptions() {
  var length = Number(prompt("Enter a password length between 8 and 128"));

  // Conditional statement to check if password meets length reqirement. Prompts end if false.
  if (length < 8) {
    alert("Password length must be at least 8 characters");
    return null;
  }

  if (length > 128) {
    alert("Password must be less than 129 characters");
    return null;
  }

  var hasSpecial = confirm("Click OK to include special characters.");

  var hasNumeric = confirm("Click OK to include numeric characters.");

  var hasLowerCase = confirm("Click OK to include lowercase characters.");

  var hasUpperCase = confirm("Click OK to include uppercase characters.");

//   // Conditional statement to check if user does not include any types of characters. Prompt ends if all false
//   if (
//     hasSpecial === false &&
//     hasNumeric === false &&
//     hasLowerCase === false &&
//     hasUpperCase === false
//   ) {
//     alert("Must select at least one character type");
//     return null;
//   }

//   // Object to store user input
//   var passOptions = {
//     length: length,
//     hasSpecial: hasSpecial,
//     hasNumeric: hasNumeric,
//     hasLowerCase: hasLowerCase,
//     hasUpperCase: hasUpperCase,
//   };

//   return passOptions;
// }

// Write password to the #password input

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
  var options = getOptions();

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
  return password + options;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
