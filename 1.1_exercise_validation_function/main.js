function validateForm() {
    let password = document.forms["form-validation"]["password"];
    if (password.value.length < 7) {
        console.log(password)
        alert ("Password minimum 6 character");
    } else {
        alert ("validated")
    }
}
