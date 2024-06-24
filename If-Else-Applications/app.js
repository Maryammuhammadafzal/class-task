
//Age Validator

var userAge = +prompt('Enter Your Age:');
if(userAge >= 40){
    alert("Your age is not valid for the ride \n Valid Age: 18 - 40 only");
}

else if(userAge >= 18 && userAge < 40 ){
    alert("Your age is valid for the ride \n  Enjoy!"  );
    
}


// library book rental System

//only 1 book application
var libraryBook = 'English';

var userBook = prompt('Enter Your Book name:');

if (userBook == libraryBook){
    alert('Your Book is availbale');
}
else{
    alert('Sorry! Your book is not available');
}

// Many Books application

var libraryBooks = ['english' , 'urdu' , 'math' , 'sindhi' , 'science'];

var userbook = prompt('Enter your Book name:');
var lowercase = userbook.toLowerCase();

var match = false;
for(var i = 0; i <= libraryBooks.length; i++){
    if(lowercase == libraryBooks[i]){
        match = true;
    }
}
if(match == true){
    alert('Your Book is available');
}
else{
    alert('Sorry! Your book is not available now');
}


// Leap year
 
var userYear = +prompt('Enter your birth year');

if((userYear % 4 === 0 && userYear % 100 !== 0 ) || userYear % 400 === 0){
    alert('your year ' + userYear + ' is a leap year');
}
else{
    alert('your year ' +  userYear + ' is not a leap year')
}


// Password Strength Checker
// var userPassword = prompt('Enter a Password');

// if( userPassword.length < 8 ){
//     if(userPassword == isNaN){
//         if(userPassword != )
//         alert('Password must contain numbers');
//     }
//     alert('Password length atleast 8')

// }


function checkPassword() {
    var password = document.getElementById('passwordInput').value;
    var strengthText = document.getElementById('strengthText');

    // Reset text initially
    strengthText.textContent = '';

    // Minimum length validation
    if (password.length < 8) {
        strengthText.textContent = 'Password must be at least 8 characters long';
        return;
    }

    // Check for lowercase letters
    var hasLowerCase = /[a-z]/.test(password);

    // Check for uppercase letters
    var hasUpperCase = /[A-Z]/.test(password);

    // Check for numbers
    var hasNumbers = /\d/.test(password);

    // Check for special characters
    var hasSpecialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);

    // Password strength evaluation
    if (hasLowerCase && hasUpperCase && hasNumbers && hasSpecialChars) {
        strengthText.textContent = 'Strong password';
    } else if ((hasLowerCase && hasUpperCase) || (hasLowerCase && hasNumbers) || (hasLowerCase && hasSpecialChars) || 
               (hasUpperCase && hasNumbers) || (hasUpperCase && hasSpecialChars) || (hasNumbers && hasSpecialChars)) {
        strengthText.textContent = 'Medium password';
    } else {
        strengthText.textContent = 'Weak password';
    }
}
