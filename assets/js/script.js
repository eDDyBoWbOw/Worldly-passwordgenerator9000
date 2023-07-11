//Added all the possible letters and symbols, used "parse" to convert the numbers
function generatePassword() {
    var length = parseInt(document.getElementById("length").value);
    var uppercase = document.getElementById("uppercase").checked;
    var lowercase = document.getElementById("lowercase").checked;
    var numbers = document.getElementById("numbers").checked;
    var symbols = document.getElementById("symbols").checked;
    //Added uppercase and lowercase letters and numbers so it could give a random password
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var numberChars = "0123456789";
    var symbolChars = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    //Makes sure everything comes out random as possible
    var allChars = "";
    var password = "";
    
    if (uppercase) {
        allChars += uppercaseChars;
    }
    
    if (lowercase) {
        allChars += lowercaseChars;
    }
    
    if (numbers) {
        allChars += numberChars;
    }
    
    if (symbols) {
        allChars += symbolChars;
    }
    
    if (allChars.length === 0) {
        alert("Please select at least one character type.");
        return;
    }
    
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars.charAt(randomIndex);
    }
    //I had a lot of trouble trying to get line 38-40 correct but clearly i figured it out, any tips how this could of been done better?
    document.getElementById("result").value = password;
}