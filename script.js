// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var lowercaseChar = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  var uppercaseChar = lowercaseChar.map((lowercaseChar) =>
    lowercaseChar.toUpperCase()
  );

  var numbChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var specialChar = [
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
  ];

  var finalArray = [];
  var displayArray = [];

  var passLength = prompt("How long would you like your password to be?");
  var addNumbers = confirm(
    "Would you like numbers in your password?",
    "Click OK for Yes or Click Cancel for NO"
  );
  var addUpperCase = confirm(
    "Would you like to add Uppercase? Click OK for Yes or Click Cancel for NO"
  );
  var addLowerCase = confirm(
    "Would you like to add Lowercase? Click OK for Yes or Click Cancel for NO"
  );
  var addSpecial = confirm(
    "Would you like to add special characters? Click OK for Yes or Click Cancel for NO"
  );

  if (passLength > 8 && passLength < 129) {
    console.log("valid input");
  } else
    return displayArray.concat("Password Length must be between 8 and 128");

  if (addNumbers) {
    finalArray = finalArray.concat(numbChar);
  }

  if (addUpperCase) {
    finalArray = finalArray.concat(uppercaseChar);
  }

  if (addLowerCase) {
    finalArray = finalArray.concat(lowercaseChar);
  }

  if (addSpecial) {
    finalArray = finalArray.concat(specialChar);
  }
  console.log(finalArray);

  for (var i = 0; i < passLength; i++) {
    displayArray.push(
      finalArray[Math.floor(Math.random() * finalArray.length)]
    );
  }
  return displayArray.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
