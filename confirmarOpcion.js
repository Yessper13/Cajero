
//funcion confirmacion para registro de cuenta nueva
function confirmarOpcion(completoID) {
    completoID=parseInt(prompt("Desea guardar su respuesta \n 1. Si \n 0. No, repetir"));//Pregunta para validar con el usuario si desea guardar lo ingresado en cada campo del registro
   return completoID;
}
export { confirmarOpcion };