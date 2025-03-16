export {confirmarOpcion}
import {inicioSesion} from  './InicioSesion.js'
import {registro} from './Registro.js'
export let contRegistro=2;
export let tipoIdent=[123,1233,];
export let identify = [123,1233,];
export let user = [123,1233,]; 
export let email = [123,1233,];
export let pws = [1234,1233,];
export let saldo =[10000,10000,];
let login;


do{
 login = parseInt(prompt("\n 1. Iniciar sesion \n 2. Registrar \n 0. Salir \n Elige respuesta (valida)"));//Inicio programa, solicitando login
    //selector para iniciar sesion o registrarse
    switch (login) {
        case 1:
            inicioSesion();//Invoca funcion que solicita parametros de inicio
            
        break;
        case 2:
            registro();//Invoca funcion que solicita parametros de registro
            console.log("Tu cuenta de banco tiene el numero: ",contRegistro);
            console.log("Tipo de identificación ingresado:", tipoIdent[contRegistro]);  
            console.log("Numero de",tipoIdent[contRegistro],":",identify[contRegistro]);
            console.log("Tu usuario es",user[contRegistro]);
            console.log("Tu correo es",email[contRegistro]);
            console.log("Tu password es",pws[contRegistro]);
            console.log("El saldo de la cuenta ",saldo[contRegistro]);
            contRegistro+=1;
        break;       
        /* default: console.log(`Por favor ingresa una opcion valida`);
        break; */
     
    }


}while(login !=0);

//funcion confirmacion
function confirmarOpcion(completoID) {
     completoID=parseInt(prompt("Desea guardar su respuesta \n 1. Si \n 0. No, repetir"));
    return completoID;
}


