var ventas = document.getElementById("ventas");
var fecha = document.getElementById("fecha");
var Ingresos = document.getElementById("Ingresos");
var Egresos = document.getElementById("Egresos");
var Valor = document.getElementById("Valor");
var Concepto = document.getElementById("Concepto");
var Guardar = document.getElementById("Guardar");


function validardatos() {
    if(ventas== '' && fechas == ''&& ingresos == ''&& egresos == ''&& Valor == ''&& concepto == '' && Guardar ==  ''){
        console.log("los campos estan validos")

    if (/^[a-zA-Z]+$/.test(fecha)) {

        console.log("fecha debe contener numeros");

        Swal.fire({

            title: "Fecha debe contener números",

            icon: "error"

        });

        return;

    }

    if (/^[a-zA-Z]+$/.test(ingresos)) {

        console.log("Los datos son incorrectos");

        Swal.fire({

            title: "Los ingresos deben contener números",

            icon: "error"

        });

        return;

    }

    if (/^[a-zA-Z]+$/.test(egresos)) {

        console.log("Los datos son incorrectos");

        Swal.fire({

            title: "Los egresos deben contener números",

            icon: "error"

        });

        return;

    }

    if (/^[a-zA-Z]+$/.test(concepto)) {

        console.log("Concepto debe contener texto");

        Swal.fire({

            title: "El concepto debe contener texto",

            icon: "error"

        });

        return;

    } 


    
}else {
    alert("rgdg")
}
}



document.getElementById("btnguardar").onclick = validardatos;