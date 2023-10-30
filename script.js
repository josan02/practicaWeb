function validarCampos() {
    let nombre = document.getElementById("nameJS").value;
    let surname = document.getElementById("surnameJS").value;
    let email = document.getElementById("emailJS").value;
    let msg = document.getElementById("msgJS").value;
    if (nombre === "" || surname === "" || email === "" || msg === "") {
        alert("Los campos Nombre,Apellido,Email y Mensaje son obligatorios");
    }
    else {

    }
}