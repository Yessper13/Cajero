import { aprobacionLogin,account } from './InicioSesion.js';
import {inicioSesion} from  './InicioSesion.js'
import {registro} from './Registro.js'
import {Opciones} from "./opcionesCuenta.js"
export {confirmarOpcion}
export let contRegistro=2;
export let tipoIdent=["C.C","C.C",];
export let identify = [123,1233,];
export let user = ["sistema1","sistema2",]; 
export let email = [123,1233,];
export let pws = [1234,1233,];
export let saldo =[10000,10000,];
export let idRecepcion = [];
export let idHistorico = [];
export let historial = [];
export let historialR = [];


//export let contHist = parseInt(0);

let login;
let opciones =new Opciones();

do{
 login = parseInt(prompt(" 1. Iniciar sesion \n 2. Registrar \n 0. Salir \n Elige respuesta (valida)"));//Inicio programa, solicitando login
    //selector para iniciar sesion o registrarse
    switch (login) {
        case 1:
            inicioSesion();//Invoca funcion que solicita parametros de inicio
            if(aprobacionLogin==1){//comprobador de que se aprobo el login si no finaliza el switch y el programa
                let optionsInside=parseInt();
                do{//Loop para iniciar opciones   
                optionsInside=parseInt(prompt("Que deseas realizar \n 1. Transferencia \n 2. Retiros \n 3. Consulta de saldo \n 4. Cambio contraseña \n 5. Recarga de saldo \n 6. Ver historial de movimientos \n 0. Salir"));
                switch(optionsInside)
                {
                    case 1:// Caso Transferencia
                    opciones.Transferencia();
                    break;
                    case 2://Caso Retiros
                    opciones.Retiro();
                    break;
                    case 3://consulta de saldo
                    opciones.ConsultaSaldo();// se invoca la funcion de consulta de saldo
                    break;
                    case 4:
                    opciones.CambioContraseña();
                    break;
                    case 5:
                    opciones.RecargaSaldo();
                    break;
                    case 6:
                    opciones.HistorialMovimientos();
                    break;
                default: console.log("Opcion invalida");//Mensaje de salida  
                }
                }while(optionsInside!=0)//Fin loop opciones a realizar
            }else{
                alert("Los datos ingresados no fueron válidos, hasta pronto")
                login=1;
            }
        
            
        break;
        case 2:
            registro();//Invoca funcion que solicita parametros de registro
            alert("Tu cuenta de banco tiene el numero: "+contRegistro+"\n Numero de"+tipoIdent[contRegistro]+":"+identify[contRegistro]+"\n Tu usuario es: "+user[contRegistro]+"\n Tu correo es: "+email[contRegistro]+"\nTu password es: "+pws[contRegistro]+"\n El saldo de la cuenta= "+saldo[contRegistro]);  
            contRegistro+=1;
        break;       
        /* default: console.log(`Por favor ingresa una opcion valida`);
        break; */
     
    }


}while(login !=0);

//funcion confirmacion para registro de cuenta nueva
function confirmarOpcion(completoID) {
     completoID=parseInt(prompt("Desea guardar su respuesta \n 1. Si \n 0. No, repetir"));
    return completoID;
}


