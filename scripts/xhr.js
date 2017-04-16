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
var myRequest;
// this value is a test url for network requests, reset it at will

var url ="http://localhost/~aminkhan1/v3/response2.php";

//event handlers for revealing hiding forms

//firstly function for clearing data from closed forms
function clearForm(myForm){
  for (i=0;i<myForm.length;i++){
    if((myForm[i].value!="LOGIN") && (myForm[i].value!="SIGN UP"))
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



//function for checking password match
function message(mymessage){
  var newMessage = document.createElement("div");
  var warning = document.createTextNode(mymessage);
  newMessage.appendChild(warning);
  newMessage.classList.add("message");
  document.body.appendChild(newMessage);
  newMessage.addEventListener("click",function(event){this.parentNode.removeChild(this)});

}

//checks passwords match and then sends ajax request
function checkPassword(event){
  event.preventDefault();
  if(this.elements.namedItem("password2").value===this.elements.namedItem("reenter").value)
  {

     myRequest = new XMLHttpRequest();
     myRequest.open("POST",url,true);
     myRequest.setRequestHeader("Content-type", "multipart/form-data");
     var username = this.elements.namedItem("username").value;
     var password = this.elements.namedItem("password2").value;
     var email = this.elements.namedItem("email").value;
     var info = "username="+username+"&password="+password+"&email="+email;
     var formData= new FormData();
     formData.append("username",username);
     formData.append("password",password);
     formData.append("email",email);
     myRequest.send(formData);

     myRequest.onreadystatechange=function(){
       if(myRequest.readyState == 4 && myRequest.status == 200){
         message("Submitted!!");
         closeSignupForm();
       }

  }

}
  else {message("PASSWORDS DONT MATCH")}
}
 signupForm.addEventListener("submit",checkPassword);
}
