$('#firstcheck').hide();    
let usernameError = true;
$('#firstname').keyup(function () {
    validatefirstname();
});
 var nameregex=/^[a-zA-Z\s]+$/;
  
function validatefirstname() {
  let usernameValue = $('#firstname').val();
  
  if (usernameValue.length == '') {
  $('#firstcheck').show();
      usernameError = false;
      return false;
  } 
  else if(!nameregex.test(usernameValue)){
    $('#firstcheck').show();
    $('#firstcheck').html("Only alphabets allowed")
    usernameError=false;
    return false;

}
  else if((usernameValue.length < 3)|| 
          (usernameValue.length > 10)) {
      $('#firstcheck').show();
      $('#firstcheck').html("length of username must be greater than 6 letters");
      usernameError = false;
      return false;
  } 
  else {
      $('#firstcheck').hide();
  }
}

$('#lastcheck').hide();    
let lastnameError = true;
$('#lastname').keyup(function () {
    validatelastname();
});
  
function validatelastname() {
  let lastnameValue = $('#lastname').val();
  if (lastnameValue.length == '') {
  $('#lastcheck').show();
      lastnameError = false;
      return false;
  }
  else if(!nameregex.test(lastnameValue)){
    $('#lastcheck').show();
    $('#lastcheck').html("Only alphabets allowed")
    lastnameError=false;
    return false;

} 
  else if((lastnameValue.length < 3)|| 
          (lastnameValue.length > 10)) {
      $('#lastcheck').show();
      $('#lastcheck').html("length of Lastname must be greater than 6 letters");
      lastnameError = false;
      return false;
  } 
  else {
      $('#lastcheck').hide();
  }
}

$('#emailcheck').hide();    
let emailError = true;
$('#email').keyup(function () {
    validateemail();
});
let regex=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  
function validateemail() {
  let emailValue = $('#email').val();
  if (emailValue.length == '') {
  $('#emailcheck').show();
  emailError = true;
      return false;
  } 
  else if(!regex.test(emailValue)){
      $('#emailcheck').show();
      $('#emailcheck').html
("enter valid Email");
      emailError = true;
      return false;
  } 
  else {
      $('#emailcheck').hide();
  }
}


$('#passcheck').hide();
    let passwordError = true;
    $('#password').keyup(function () {
        validatePassword();
    });
    function validatePassword() {
        let passwrdValue = 
            $('#password').val();
        if (passwrdValue.length == '') {
            $('#passcheck').show();
            passwordError = false;
            return false;
        } 
        if ((passwrdValue.length < 3)|| 
            (passwrdValue.length > 10)) {
            $('#passcheck').show();
            $('#passcheck').html
("**length of your password must be between 3 and 10");
            $('#passcheck').css("color", "red");
            passwordError = false;
            return false;
        } else {
            $('#passcheck').hide();
        }
    }




    $('#conpasscheck').hide();
    let confirmPasswordError = true;
    $('#conpassword').keyup(function () {
        validateConfirmPasswrd();
    });
    function validateConfirmPasswrd() {
        let confirmPasswordValue = 
            $('#conpassword').val();
        let passwrdValue = 
            $('#password').val();
        if (passwrdValue != confirmPasswordValue) {
            $('#conpasscheck').show();
            $('#conpasscheck').html(
                "**Password didn't Match");
            $('#conpasscheck').css(
                "color", "red");
            confirmPasswordError = false;
            return false;
        } else {
            $('#conpasscheck').hide();
        }
    }
// $.validator.addMethod("lettersonly", function (value, element) {
//   return this.optional(element) || /^[a-z\s]+$/i.test(value);
// });

// $.validator.addMethod("customemail", 
//     function(value, element) {
//         return /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value);
//     }, 
//     "Not valid,Please enter full email"
// );

$('#submitbtn').click(function () {
  validatefirstname();
  validatelastname();
  validateemail();
  validatePassword();
  validateConfirmPasswrd();


  if ((usernameError == true)&&(lastnameError==true)&&(emailError==true)&&(passwordError==true)&&(confirmPasswordError==true)){
      return true;
  } else {
      return false;
  }
});


