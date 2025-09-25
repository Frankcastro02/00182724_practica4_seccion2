var input = document.getElementById("input")
var output = document.getElementById("output")



function recordatorio() {
    let mensaje;
    let dia = input.value.toLowerCase()
    
    switch(dia){ 
     case "Lunes":
      mensaje = "Debes atender a un cliente específico.";
      break;
    case "Martes":
      mensaje = "Visitas una agencia fuera de la ciudad.";
      break;
    case "Miercoles":
      mensaje = "Debes llevar a tu hija al ballet.";
      break;
    case "Jueves":
      mensaje = "Prioriza entregas de desarrollo.";
      break;
    case "Viernes":
      mensaje = "Atiendes problemas de manera remota.";
      break;
    case "Sabado":
      mensaje = "Debes hacer lo que tu esposa quiera.";
      break;
    default:
      mensaje = "Nada programaso.";
  }
  output.innerText = mensaje
}