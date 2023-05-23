class User{
    constructor(login,email,password){
        this.login = login;
        this.email = email;
        this.password = password;
    }
    wypisz(){
        console.log("login to: " + this.login);
        console.log("email to: " + this.email);
        console.log("haslo to: " + this.password);
    }
 }


function isNotEmpty(inputValue) {
    if (inputValue.trim() === '') {

        return false;
    }
    return true;
}
function hasValidLength(inputValue, minLength, maxLength) {
   if (inputValue.length < minLength || inputValue.length > maxLength) {
        return false;
   }
   return true;
}
function isValidEmail(inputValue) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(inputValue);
}
 
function isStrongPassword(inputValue) {
   const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,50}$/;
   return passwordRegex.test(inputValue);
}

 const form = document.querySelector('form');

 form.addEventListener('submit', function (event) {
   event.preventDefault();
 
    const loginInput = document.getElementById('login');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const passwordValidate = document.getElementById('passwordValidate');
    

   if (!isNotEmpty(loginInput.value)) {
    document.getElementById("login-error").innerHTML = "Pole Login jest wymagane ";
    return;
    }else{
    document.getElementById("login-error").innerHTML = null;
  }

  if (!hasValidLength(loginInput.value, 2, 25)) {
    document.getElementById("login-error").innerHTML = "Pole Login powinno zawierać od 2 do 25 znaków ";
    return;
  }else{
    document.getElementById("login-error").innerHTML = null;
  }

  if (!isValidEmail(emailInput.value)) {
    document.getElementById("email-error").innerHTML = "Pole Email powinno zawierać poprawny adres email ";
    return;
  }else{
    document.getElementById("email-error").innerHTML = null;
  }

  if (!isNotEmpty(passwordInput.value)) {
    document.getElementById("password-error").innerHTML = "Pole Hasło jest wymagane ";
    return;
  }else{
    document.getElementById("password-error").innerHTML = null;
  }

  if (!hasValidLength(passwordInput.value, 8, 50)) {
    document.getElementById("password-error").innerHTML = "Pole Hasło powinno zawierać od 8 do 50 znaków ";
    return;
  }else{
    document.getElementById("password-error").innerHTML = null;
  }

  if (!isStrongPassword(passwordInput.value)) {
    document.getElementById("password-error").innerHTML = "Pole Hasło powinno zawierać co najmniej jedną małą literę, jedną dużą literę i jedną cyfrę ";
    return;
  }else{
    document.getElementById("password-error").innerHTML = null;
  }

  if (!isNotEmpty(passwordValidate.value)) {
    document.getElementById("passwordVal-error").innerHTML = "Powtórz hasło ";
    return;
  }else{
    document.getElementById("passwordValidate-error").innerHTML = null;
  }

  if (passwordValidate.value!=passwordInput.value) {
    document.getElementById("passwordValidate-error").innerHTML = "Hasła się nie zgadzają ";
    return;
  }else{
    document.getElementById("passwordValidate-error").innerHTML = null;
  }
  


const user = new User(loginInput.value, emailInput.value, passwordInput.value);
user.wypisz()
 })



 
 const login = document.querySelector('form1');

 login.addEventListener('submit', function (event) {
    event.preventDefault();

    const loginR = document.getElementById('loginR');
    const passwordR = document.getElementById('passwordR');

    if(loginR == user){

    }


 })


 