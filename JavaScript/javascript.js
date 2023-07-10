
// // *DATOS PARA EL CARRITO DE COMPRAS

// //* VARIABLES QUE SE PUEDEN AÑADIR
// let botones = document.querySelectorAll("#articulo button");

// //* BUCLE FOR PARA PRESIONAR VARIOS BOTONES
// for (let i = 0; i < botones.length; i++) {
//   botones[i].addEventListener("click", agregarCarrito, false);
// }

// //* DEFINIR LA FUNCION
// function agregarCarrito(e) {
//   // SI PRESIONAMOS EL BOTON LA IMAGEN Y TEXTO SE ELIMINAN
//   if (document.querySelector("#carritoVacio")) {
//     document.querySelector("#carritoVacio").remove();
//     document.querySelector("#carrito figcaption").remove();
//   }
//   //* AGREGAR INFORMACION DEL TARGET
//   let elementBoton = e.target;
//   let elementoPadre = elementBoton.parentElement.parentElement;

//   //* SACAR INFORMACION DE ELEMENTOS DEL HTML
//   let parrafo = elementoPadre.querySelector("p").innerHTML;
//   let p_n = elementoPadre.querySelector(".precio_normal").innerHTML;
//   let p_d = elementoPadre.querySelector(".precio_descuento").innerHTML;

//   //*  AGREGAR INFORMACION AL CARRITO
//   let nuevoelemento = document.createElement("div");
//   nuevoelemento.innerHTML = `<div>
//                                     <h4>${parrafo}</h4>
//                                     <p>${p_n}</p>
//                                     <p>${p_d}</p> 
//                                     <hr>
//                                 </div>`;

//   document.querySelector("#carrito").appendChild(nuevoelemento);

//   //* OBTENER ELEMENTO PADRE DONDE SE HIZO CLICK
//   alert("Se agrego un producto al carrito de compras 'REVISALO'");
// }


// -------------------------------------------------------------------------------------------------------------------------------------- 



//* --------VALIDACION DE DATOS AL REGISTRO DEL CLIENTE

//* FUNCION SERA LLAMADO AL PRESIONAR EL BOTON "REGISTRA AL CLIENTE"
function ValidacionRegistroCliente() {

  //* CONDICION SI ES "TRUE" SEGUIRA LA SECUENCIA O "FALSE" NO HARA NADA
  if (confirm("¿Desea registrarse como cliente?")) {


//* -----VALIDACION REGISTRO AL CLIENTE - "NOMBRE"
    //* DECLARACION DE VARIABLE - "NOMBRE" 
    let inputName = document.querySelector("#name").value;

    //* CONDICION SI EL NOMBRE ESTA MAL ESCRITO
    if (inputName.length < 4 || inputName.length > 16 || inputName.length == null) {

      //* VALOR SPAN - "NOMBRE"
      let txt_span_name = document.querySelector("#span_name");

      //* CAMBIO DE ATRIBUTO EN CSS
      txt_span_name.setAttribute("style", "color: red");

      //* SE BORRA LOS DATOS ESCRITOS SI NO CUMPLE LAS CONDICIONES 
      document.querySelector("#name").value = "";
      alert("Corrige tus datos");
      return false;
    }



//*-----VALIDACION REGISTRO AL CLIENTE - "APELLIDOS"
    //* DECLARACION DE VARIABLE - "APELLIDOS" 
    let inputLastName = document.querySelector("#last_name").value;

    //* CONDICION SI APELLIDO ESTA MAL ESCRITO
    if (inputLastName.length < 4 || inputLastName.length > 16 || inputLastName.length == null) {

      //* VALOR SPAN - "APELLIDO"
      let txt_span_lastName = document.querySelector("#span_lastName");

      //* CAMBIO DE ATRIBUTO EN CSS
      txt_span_lastName.setAttribute("style", "color: red");

      //* SE BORRA LOS DATOS ESCRITOS SI NO CUMPLE LAS CONDICIONES 
      document.querySelector("#last_name").value = "";
      alert("Corrige tus datos");
      return false;
    }


    //* VALIDACION SI ES "TRUE" ENVIA LOS DATOS
    return true;
  } else {
    return false;
  }
}


//* JQUERY ejrcicios

//* AL ESTAR LISTO EL DOCUMENTO 
$("document").ready(function () {

  //* CAPTURAR EVENTO SUBMIT
  $("#registro_estudiante").submit(function () {
    return valDatos();
  })
})

function valDatos() {
  let pregunta = confirm("¿Seguro que desea enviar?");
  if (pregunta) { //*CASO DE PRESIONAR TRUE

    //* VALIDAR NUESTRO FORMULARIO 
    let txtEmail = $("#email")[0].value;

   
    //* VALIDAR EMAIL 
    if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(txtEmail) == false) {
      alert("Su correo electronico esta mal.");
      return false;
    }

    return true;

  } else { //*CASO PRESIONE CANCELAR
    return false;
  }
}









//* CONFIRMAR SI SE ENVIA O NO EL FORMULARIO
// return function () {

//   let pregunta = confirm("Seguro que desea enviar?");
//   if (pregunta) { //*CASO DE PRESIONAR TRUE

//     //* VALIDAR NUESTRO FORMULARIO
//     let txtNombre = $("#last_name")[0].value;
//     let txtEmail = $("#email")[0].value;

//     //* VALIDAR APELLIDO
//     if (txtNombre.length > 50 || txtNombre.length < 2) {
//       alert("Tu nombre no es aceptado.");
//       return false;
//     }

//     //* VALIDAR EMAIL
//     if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(txtEmail.value) == false) {
//       alert("Su correo electronico esta mal.");
//       return false;
//     }
//     return true;

//   } else { //*CASO PRESIONE CANCELAR
//     return false;
//   }

// }
//   })
// })










