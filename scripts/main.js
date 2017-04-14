window.onload = function(){

//assigning elements to variables
var loginFormContainer = document.getElementById('loginFormContainer');
var signupFormContainer = document.getElementById('signupFormContainer');
var signupForm = document.getElementById('signupForm');
var loginForm = document.getElementById('loginForm');
var loginButt = document.getElementById('loginButt');
var signupButt = document.getElementById('signupButt');
var closeLogin = document.getElementById('closeLogin');
var closeSignup = document.getElementById('closeSignup');

//event handlers for revealing hiding forms

//firstly function for clearing data from closed forms
function clearForm(myForm){
  for (i in myForm){
    if(myForm[i].value!="LOGIN" && myForm[i].value!="SIGN UP")
    {myForm[i].value=""}
  }
}


function revealLoginForm(event){
  loginFormContainer.classList.remove("noForm");
  loginFormContainer.classList.add("form")
}
function closeLoginForm(event){
  loginFormContainer.classList.remove("form");
  loginFormContainer.classList.add("noForm");
  clearForm(loginForm);
}
function revealSignupForm(event){
  signupFormContainer.classList.remove("noForm");
  signupFormContainer.classList.add("form")
}
function closeSignupForm(event){
  signupFormContainer.classList.remove("form");
  signupFormContainer.classList.add("noForm");
  clearForm(signupForm);
}
//applying event handlers
loginButt.addEventListener("click",revealLoginForm);
signupButt.addEventListener("click",revealSignupForm);
closeLogin.addEventListener("click",closeLoginForm);
closeSignup.addEventListener("click",closeSignupForm);

}
