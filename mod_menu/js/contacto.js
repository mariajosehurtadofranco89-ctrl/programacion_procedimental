var correo_electronico = document.getElementById("correo electronico");
var Comentario = document.getElementById("Comentario");

function validardatos() {

    if (/^[a-zA-Z]+$/.test(correo_electronico)) {

        console.log("correo_elctronico debe contener numeros");

        Swal.fire({

            title: "correo_electronico debe contener letras",

            icon: "error"

        });

        return;

    }

    if (/^[a-zA-Z]+$/.test(Comentario)) {

        console.log("Los datos son incorrectos");

        Swal.fire({

            title: "el comentario deben contener números",

            icon: "error"

        });

        return;

    }

   
}