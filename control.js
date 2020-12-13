function validarDatos() {
    let user, pass, regex;
    user = document.getElementById("usuario").value;
    pass = document.getElementById("clave").value;
    regex = /^(\w*\@\w+)/;


    if (user === "") {
        alert("El campo \"usuario\" no puede estar vaci­o.");
        return false;
    };
    if (user.indexOf("@") == -1) {
        alert("Se debe ingresar el caracter @.");
        return false;
    };
    if (!regex.test(user)) {
        alert("Formato de usuario incorrecto. Debe conener @ al inicio o en el medio del nombre.");
        return false;
    };
    if (pass === "") {
        alert("El campo \"clave\" no puede estar vacio.");
        return false;
    };
    alert("Datos validados correctamente.");
}