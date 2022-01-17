var getEmail = document.getElementById("email");
var getPassword = document.getElementById("password");

var userEmail = localStorage.getItem("email");
var userPassword = localStorage.getItem("password");

 

function showPassword(){
    
    if (getPassword.type === "password") {
        getPassword.type = "text";
      } else {
        getPassword.type = "password";
      }
}

function loginUser(){
     
   
 
    if(userEmail === null || userPassword === null || userEmail === undefined || userPassword === undefined ){
         alert("User not found! Please register");
         return
     }else if(getEmail.value.toString().trim() !== userEmail || getPassword.value.toString().trim() !== userPassword){
         alert("Invalid user credentials");
         return

     }else{
         var getForm = document.getElementById("loginForm");
         getForm.action = "/Home/index.html";
     }

    
}