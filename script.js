// Assignment code here
function generatePassword() {
  var specialCharacters = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '_', '^', '{', '|', '}', '~'];
  var numericCharacters = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var possibleCharacters = [];

  characterCount = prompt("How long would you like your password to be? Please choose between 8-128 characters.");
  if (characterCount < 8 || characterCount > 128) {
    return "Please choose a number between 8 and 128.";
  } else if (isNaN(characterCount)) {
    characterCount = prompt("Please enter a valid number");
  } else {
    alert("Password length will be " + characterCount + " characters long.");
  }

  lowercase = confirm("Would you like to use lowercase characters?");
  if (lowercase) {
    var createLowercase = alert("Password will contain lowercase letters.");
  } else {
    alert("Password will NOT contain lowercase letters.");
  }

  uppercase = confirm("Would you like to use uppercase characters?");
  if (uppercase) {
    alert("Password will contain uppercase letters.");
  } else {
    alert("Password will NOT contain uppercase letters");
  }

  numbers = confirm("Would you like to use numbers?");
  if (numbers) {
    alert ("Password will contain numbers.");
  } else {
    alert ("Password will NOT contain numbers.");
  }

  special = confirm("Would you like to use special characters?");
  if(special) {
    alert ("Password will contain special characters.");
  } else {
    alert ("Password will NOT contain special characters.");
  }

  if (lowercase === false && uppercase === false && numbers === false && special === false) {
    return ("Please select a character type.");
  };

  if (lowercase) {
    possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
  }

  if(uppercase) {
    possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
  }

  if (numbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
  }

  if (special) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }

  let finalPassword = ""
  for (let i = 0; i < characterCount; i++) {
    let rng = [Math.floor(Math.random() * possibleCharacters.length)];

    finalPassword = finalPassword + possibleCharacters[rng];
  }

  return finalPassword;
};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
