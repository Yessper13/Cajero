import { aprobacionLogin} from './InicioSesion.js';
import {inicioSesion} from  './InicioSesion.js'
import {registro,clienteNuevo} from './Registro.js'
import {Opciones} from "./opcionesCuenta.js"

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
                optionsInside=parseInt(prompt("Que deseas realizar \n 1. Transferencia \n 2. Retiros \n 3. Consulta de saldo \n 4. Cambio contraseña \n 5. Recarga de saldo \n 6. Ver historial de movimientos \n 0. Salir"));//Pregunta para solicitar al usuario el tipo de movimiento a realizar
                switch(optionsInside)//Cada caso invoca la funcion correspondiente de la clase opcionesCuenta.js
                {
                    case 1:// Caso Transferencia
                    opciones.Transferencia();// se invoca la funcion de consulta de transferencia
                    break;
                    case 2://Caso Retiros
                    opciones.Retiro();// se invoca la funcion de consulta de retiro
                    break;
                    case 3://consulta de saldo
                    opciones.ConsultaSaldo();// se invoca la funcion de consulta de saldo
                    break;
                    case 4://Cambio de contraseña
                    opciones.CambioContraseña();// se invoca la funcion de consulta de cambio de contraseña
                    break;
                    case 5://Recarga el saldo de la cuenta
                    opciones.RecargaSaldo();// se invoca la funcion de consulta de recarga de saldo
                    break;
                    case 6://Historial de movimientos de la cuenta, incluyendo recepciones de dinero
                    opciones.HistorialMovimientos();// se invoca la funcion de consulta de historico de movimientos
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
            if (clienteNuevo === 0) {//si el cliente es nuevo, se realiza el registro correctamente
                alert("Tu cuenta de banco tiene el numero: "+contRegistro+"\n Numero de"+tipoIdent[contRegistro]+":"+identify[contRegistro]+"\n Tu usuario es: "+user[contRegistro]+"\n Tu correo es: "+email[contRegistro]+"\nTu password es: "+pws[contRegistro]+"\n El saldo de la cuenta= "+saldo[contRegistro]);//Impresion de registro de cuenta nueva 
                contRegistro+=1;
            }else{//mensaje en caso de que el cliente ya exuste
                alert("La identificacion ingresada ya se encuentra registrada, intenta de nuevo")
            }
                
            
            
        break;       
        /* default: console.log(`Por favor ingresa una opcion valida`);
        break; */
     
    }


}while(login !=0);



