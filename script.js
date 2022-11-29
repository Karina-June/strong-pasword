// Listed below are all the available charaters for the password generator
var lowercase = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var uppercase = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharaters = ["!", "@", "#", "$", "%", "^", "<", ">", "&", "*", "?", "+", "="];
var passwordLength = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];

//Listed below are all the alert questions popping up at the top of the page
function getPasswordCriteria() {
  var userChoseLowercase = confirm("Do you want lowercase letters in your password? ");
  var userChoseUppercase = confirm("Do you want uppercase letters in your password? ");
  var userChoseNumbers = confirm("Do you want numbers in your password?");
  var userChoseSpecialCharaters = confirm("Do you want special charaters in your password? ");
  var userChosePasswordLength = prompt("How long will your password be?");

  var options = {
    userChoseLowercase: userChoseLowercase,
    userChoseUppercase: userChoseUppercase,
    userChoseNumbers: userChoseNumbers,
    userChoseSpecialCharaters: userChoseSpecialCharaters,
    userChosePasswordLength: userChosePasswordLength
  };
  return options;
}
function createRandom(length) {
 var randomNum = Math.floor(Math.random() * length);
 return randomNum;
}


function generatePassword() {
  var userChose = getPasswordCriteria();
  var availableChars = [];
  var passwordArr = [];
  console.log(userChose)

  if(userChose.userChoseLowercase) {
    availableChars = availableChars.concat(lowercase);
  }
  if(userChose.userChoseUppercase) {
    availableChars = availableChars.concat(uppercase);
  }
  if(userChose.userChoseNumbers) {
    availableChars = availableChars.concat(numbers);
  }
  if(userChose.userChoseSpecialCharaters) {
    availableChars = availableChars.concat(specialCharaters);
  }
  if(userChose.userChosePasswordLength) {
    availableChars = availableChars.concat(passwordLength);
  }

  for(var i = 0; i < 128; i++){
    passwordArr.push(availableChars[createRandom(availableChars.length)])
  }

  return passwordArr.join("")
}

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
