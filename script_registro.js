function validarPasswords() {
    let password1 = document.getElementById("pswd1JS");
    let password2 = document.getElementById("pswd2JS");
    if (password1 !== password2) {
        alert("Las contraseñas no coinciden")
    }
}