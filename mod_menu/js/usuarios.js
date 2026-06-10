var Nombre = document.getElementById("Nombre");
var telefono = document.getElementById("telefono");
var Direccion = document.getElementById("Direccion");
var Email = document.getElementById("Email");
var contraseña = document.getElementById("contraseña");
var Fecha_Nacimiento = document.getElementById("Fecha_Nacimiento");
var Documento_identidad = document.getElementById("Documento_identidad");
var estado_civil = document.getElementById("estado_civil");
var genero = document.getElementById("genero");
var profesion= document.getElementById("profesion");
var rol = document.getElementById("rol");

function ValidarDatos(){}

    if(Nombre_completo == '' || telefono == ''|| Direccion == ''|| Email == ''|| contraseña == ''|| Fecha_Nacimiento == ''|| Documento_identidad == ''|| estado_civil == ''|| genero == ''|| profesion == ''||rol == ''){
        console.log("los campos estan vacios")
    }
else{
    if(Nombre_completo != /[a-zA-z]/){
        console.log('los datos son incorrectos')
    }
if(telefono.length () > 10){
    console.log('los datos son incorrectos')
}
if(Email !=/[@]/){
    console.log('los datos son incorrectos')
}
if(Documento_identidad == /[a-zA-z]/){
    console.log('los datos son incorrectos')
}
if(contraseña.length () < 8){
    console.log("los datos son incorrectos")
}

}
