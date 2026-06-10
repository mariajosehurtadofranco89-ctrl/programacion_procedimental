var ventas = document.getElementById("ventas");
var fecha = document.getElementById("fecha");
var Ingresos = document.getElementById("Ingresos");
var Egresos = document.getElementById("Egresos");
var Valor = document.getElementById("Valor");
var Concepto = document.getElementById("Concepto");
var Guardar = document.getElementById("Guardar");


function ValidarDatos(ventas) {
    if (ventas == '' && fecha == '' && Ingresos == '' && Egresos == '' && Valor == '' && Concepto == '' && Guardar == '') {
        console.log("los campos estan vacios")
    }
    else {
        if (fecha == /[a-zA-z]/) {
            console.log('los datos son incorrectos')
        }

        if (Ingresos == /[a-zA-z]/) {

        }
    }
}
