document.getElementById("generate").addEventListener("click", function() {
  getPasswordOptions();
});

function getPasswordOptions() {
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

  var specialChars = confirm("Would you like any special characters?");

  var numericChars = confirm("Would you like any numbers?");

  var upperChars = confirm("Would you like any uppercase letters?");

  var lowerChars = confirm("Would you like any lowercase letters?");

  if (!specialChars && !numericChars && !upperChars && !lowerChars) {
    alert("Sorry at least one item must be selected");
  }

  var passwordOptions = {
    specialChars,
    numericChars,
    upperChars,
    lowerChars
  };
  return passwordOptions;

  function generatePassword() {
    var getPasswordOptions = "length";
    var values = "";
    var password = "";
    for (var i = 0; i <= length.length; i++) {
      if (specialChars === true) {
        return "!@#$%^&*()_-=+:,<>.?/~";
      }
      if (numericChars === true) {
        return "0123456789";
      }
      if (lowerChars === true) {
        return "abcdefghijklmnopqrstuvwxyz";
      }
      if (upperlChars === true) {
        return "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }
    }
    console.log("it works")
  }

}
