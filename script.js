// Assignment Code
var generateBtn = document.querySelector("#generate");
const specialCharacters = "!@#$%^&*()";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
var passwordLenth("Enter the amount of characters you would like for you password. It must be between 8 and 128 characters")
var lowerCase("Would you like lowercase letters in your password")
var uppperCase("Would you like uppercase letters in your password")
var numers("Would you like numbers to be included in your password")
var specialCharacters("Would you like special characters to be included in your password")





}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
