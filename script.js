$(document).ready(function () {
  $("#submit").click(function () {
    let name = $("#name").val();
    let email = $("#email").val();
    let pass = $("#password").val();

    if (name.length == "") {
      $("#p1").text("Please enter your name");
      $("#name").focus();
      return false;
    }

    else if (email.length == "") {
      $("#p2").text("Please enter your email address");
      $("#email").focus();
      return false;
    }


    else if (pass.length == "") {
      $("#p3").text("Please enter your password");
      $("#password").focus();
      return false;
    }

    else {
      let con = confirm("Are you Done?");
      if (con === true) {
        alert("Welcome to our Website");
        return true;
      }
      else {
        return false;
      }
    }
  });
});