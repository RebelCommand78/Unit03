// Variables for the password

var specialChars = [
  "@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."
];

var numericChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var upperCasedChars = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

var lowerCasedChars = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

// code for the generate password button to start prompts

document.getElementById("generate").addEventListener("click", function () {
  getPasswordChoices();
});

function getPasswordChoices() {
  var length = parseInt(
    prompt(
      "Please chose the number of characters you would like between 8 and 128"
    )
  );

  if (isNaN(length)) {
    alert("password length must be a number");
    return;
  }

  if (length < 8) {
    alert("Password length must be greater than 8 characters");
    return;
  }

  if (length > 128) {
    alert("Password length must be less than 128 characters");
    return;
  }

  var PassSpecialChars = confirm("Would you like any special characters?");

  var PassNumericChars = confirm("Would you like any numbers?");

  var PassUpperChars = confirm("Would you like any uppercase letters?");

  var PassLowerChars = confirm("Would you like any lowercase letters?");

  if (!specialChars && !numericChars && !upperChars && !lowerChars) {
    alert("Sorry at least one item must be selected");
  }

  var passwordOptions = {
    length: length,
    hasSpecialCharacters: PassSpecialChars,
    hasNumericCharacters: PassNumericChars,
    hasUpperCasedCharacters: PassUpperChars,
    hasLowerCasedCharacters: PassLowerChars
  };
  return passwordOptions;
}

  
// this pulls the elements from selected arrays
function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];

    return randElement;
  }

  // this actually creates the password form the selected elements
  function generatePassword() {
    var choices = getPasswordChoices();
    var result = [];
    var possibleCharacters = [];
    var selectedCharacters = [];

    if (choices.hasSpecialCharacters) {
      possibleCharacters = possibleCharacters.concat(specialChars);
      selectedCharacters.push(getRandom(specialChars));
    }

    if (choices.hasNumericCharacters) {
      possibleCharacters = possibleCharacters.concat(numericChars);
      selectedCharacters.push(getRandom(numericChars));
    }

    if (choices.hasLowerCasedCharacters) {
      possibleCharacters = possibleCharacters.concat(lowerCasedChars);
      selectedCharacters.push(getRandom(lowerCasedChars));
    }

    if (choices.hasUpperCasedCharacters) {
      possibleCharacters = possibleCharacters.concat(upperCasedChars);
      selectedCharacters.push(getRandom(upperCasedChars));
    }

    for (var i = 0; i < choices.length; i++) {
      var possibleCharacter = getRandom(possibleCharacters);

      result.push(possibleCharacter);
    }

    for (var i = 0; i < selectedCharacters.length; i++) {
      result[i] = selectedCharacters[i];
    }

    return result.join("");
  }

var generateButton = document.querySelector("#generate");
generateButton.addEventListener("click", writePassword);

// Show password in form
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyButton.removeAttribute("disabled");
  copyButton.focus();
}

//code for the copy button  
var copyButton = document.querySelector("#copy");
copyButton.addEventListener("click", copyToClipboard);

function copyToClipboard() {
  var passwordText = document.querySelector("#password");

  passwordText.select();
  document.execCommand("copy");

  alert(
    "Your password " + passwordText.value + " was copied to your clipboard."
  );
}