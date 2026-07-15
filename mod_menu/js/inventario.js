var codigo_producto = document.getElementById("codigo_producto");
var Nombre_producto = document.getElementById("Nombre_producto");
var precio_unitario = document.getElementById("precio_unitario");
var cantidad_producto = document.getElementById("cantidad_producto");
var marca_producto = document.getElementById("marca_producto");
var categoria_producto = document.getElementById("categoria_producto");
var unidad_medida = document.getElementById("unidad_medida");

function validardatos() {
      if(ventas== '' && codigo_producto == ''&& Nombre_producto == ''&& precio_unitario== ''&& marca_producto == ''&& categoria_producto== '' && unidad_medida==  ''){
        console.log("los datos estan validos")

    if (/^[a-zA-Z]+$/.test(codigo_producto)) {

        console.log("codigo_producto debe contener numeros");

        Swal.fire({

            title: "codigo_producto debe contener numeros",

            icon: "error"

        });

        return;

    }

    if (!/^[a-zA-Z]+$/.test(nombre_producto)) {

        console.log("nombre_producto debe contener letras");

        Swal.fire({

            title: "nombre_producto debe contener letras",

            icon: "error"

        });

        return;

    }

    if (/^[a-zA-Z]+$/.test(precio_unitario)) {

        console.log("precio_unitario debe contener numeros");

        Swal.fire({

            title: "precio_unitario debe contener numeros",

            icon: "error"

        });

        return;

    }

    if (/^[a-zA-Z]+$/.test(cantidad_producto)) {

        console.log("cantidad_producto debe contener numeros");

        Swal.fire({

            title: "cantidad_producto debe contener numeros",

            icon: "error"

        });

        return;

    }

    if (!/^[a-zA-Z]+$/.test(marca_del_producto)) {

        console.log("marca_del_producto debe contener letras");

        Swal.fire({

            title: "marca_del_producto debe contener letras",

            icon: "error"

        });

        return;

    }

    if (!/^[a-zA-Z]+$/.test(categoria_del_producto)) {

        console.log("categoria_del_producto debe contener letras");

        Swal.fire({

            title: "categoria_del_producto debe contener letras",

            icon: "error"

        });

        return;
    }
}
}