function onChange() {
    const password = document.querySelector('input[name=password]');
    const confirm = document.querySelector('input[name=confirm]');
    if (confirm.value === password.value) {

       document.getElementsByClassName("error").innerHTML = "Password Match"; 
    } else {
        document.getElementsByClassName("error").innerHTML = "Passwords do not match";
    }
  }