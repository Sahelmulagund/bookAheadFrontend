
var getEmail = document.getElementById("email");
var getUsername = document.getElementById("username");
var getPassword = document.getElementById("password");
 
var userEmail = localStorage.getItem("email");
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 
function showPassword(){
    
    if (getPassword.type === "password") {
        getPassword.type = "text";
      } else {
        getPassword.type = "password";
      }
}
$(".lgButton").click(function(){
    if(getEmail.value.toString().trim().match(mailformat) && getEmail.value.toString().trim().length !== 0 && getUsername.value.toString().trim().length !== 0 && getPassword.value.toString().trim().length !== 0){
      localStorage.setItem("username",getUsername.value.toString());
      localStorage.setItem("email",getEmail.value.toString().trim());
      localStorage.setItem("password",getPassword.value.toString().trim());
      alert("Registered Successfully!\nPlease log into your account");

    }
   
});
 
 
