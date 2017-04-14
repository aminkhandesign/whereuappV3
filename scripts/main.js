window.onload = function(){

//assigning elements to variables
var loginForm = document.getElementById('loginForm');
var signupForm = document.getElementById('signupForm');
var loginButt = document.getElementById('loginButt');
var signupButt = document.getElementById('signupButt');
var closeLogin = document.getElementById('closeLogin');
var closeSignup = document.getElementById('closeSignup');

//event handlers for revealing hiding forms
function revealLoginForm(event){
  loginForm.classList.remove("noForm");
  loginForm.classList.add("form")
}
function closeLoginForm(event){
  loginForm.classList.remove("form");
  loginForm.classList.add("noForm")
}
function revealSignupForm(event){
  signupForm.classList.remove("noForm");
  signupForm.classList.add("form")
}
function closeSignupForm(event){
  signupForm.classList.remove("form");
  signupForm.classList.add("noForm")
}
//applying event handlers
loginButt.addEventListener("click",revealLoginForm);
signupButt.addEventListener("click",revealSignupForm);
closeLogin.addEventListener("click",closeLoginForm);
closeSignup.addEventListener("click",closeSignupForm);

}
