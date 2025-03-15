export {inicioSesion};
import { user } from "./login.js";
import { pws } from "./login.js";
import { saldo } from "./login.js";

let aprobacionLogin=parseInt(0);
var account=parseInt();//variable para guardar el numero de cuenta y ubicar la posicion de los vectores a comparar en la funcion inicioSesion
//funcion inicio de sesion
function inicioSesion(){
    let repetir=parseInt();//Variable para manipular bucle
    do{
        account = parseInt(prompt("Ingresa tu numero de cuenta"));//variable para guardar el numero de cuenta y ubicar la posicion de los vectores a comparar
        let userIn = prompt(`Ingresa tu usuario (ej.PROJAS)`);//Variable para guardar el usuario y compararlo con el vector user
        let passwordIn = parseInt(prompt(`ingresa tu contraseña de 4 digitos (ej. 1562)`));//Variable para guardar la contraseña y compararla con el vector pws
        //condicional para validar que coincida el ingreso a la cuenta
        if(userIn==user[account] && passwordIn==pws[account]){
            console.log("Inicio de sesion completo");//mensaje de bienvenida
            aprobacionLogin=1;
            repetir=2;//asignacion de valor para salir del ciclo y continuar
        }
        else{
            repetir=parseInt(prompt("No coinciden los datos \n 1. Para intentar de nuevo \n 0. Para salir"));//mensaje de error y solicitud de ejecucion
        }
        
    }while(repetir ==1)//fin ciclo para inicio de sesion
    if(aprobacionLogin==1){//comprobador de que se aprobo el login si no finaliza el switch y el programa
        let optionsInside=parseInt();
        do{//Loop para iniciar opciones   
        optionsInside=parseInt(prompt("Que deseas realizar hoy? \n 1. transferencia \n 2. Retiros \n 3. Consulta de saldo \n 4. recarga de saldo \n 5. Cambio contraseña \n 0. Salir"));
        switch(optionsInside)
        {
            case 1:// Caso Transferencia
            let loop1=parseInt(1);
                do{//Loop para iniciar Transferencia
                
                let consig=parseInt(prompt("A cual cuenta deseas transferir?"));
                let chkconsig=parseInt(prompt("Confirma la cuenta a la cual cuenta deseas transferir"));

                if(consig==chkconsig){
                    let loop2=parseInt();
                    do{//Loop para validar valor a consignar
                        let valorconsig=parseFloat(prompt("Ingresa el valor a transferir"))
                        if(valorconsig<=saldo[account] && valorconsig>0){
                            saldo[consig]+=valorconsig;
                            console.log("La consignacion se ha realizado con exito a la cuenta ",consig,",por un valor de: ",valorconsig)
                            loop2=0;
                        }
                        else{
                            console.log("Valor de transaccion no valida o tienes saldo insuficiente")
                            loop2=prompt("1. para ingresar otro valor \n 0. para salir")
                        }
                    }while(loop2==1)  
                }
                else{loop1 = parseInt(prompt("Cuenta invalida \n 1. para intentar de nuevo \n 0. Salir"));
                }
            }while(loop1==1)
            optionsInside=parseInt(prompt("Deseas realizar algo mas? \n 1. si \n 0. no, salir")); //Validacion para iniciar de nuevo el bucle de opciones optionsInside
            break;

            case 2://Caso Retiros
                let loopR=parseInt(1);
                do{
                    let retiro=parseInt(prompt("Ingresa el valor a retirar"));
                    alert(saldo[account])
                    if( retiro <= saldo[account] && retiro > 0){
                        saldo[account]-=retiro;
                        console.log("El retiro fue de: ",retiro," y el saldo restante es ",saldo[account]);
                        loopR=0
                    }
                    else{loopR = parseInt(prompt("Cuenta invalida \n 1. para intentar de nuevo \n 0. Salir"));
                    }

                }while(loopR==1)//Fin de loop para retirar
            break;
        default: console.log("Opcion invalida");//Mensaje de salida  
        }
        }while(optionsInside!=0)//Fin loop opciones a realizar
    }else{
        console.log("Hasta pronto")
        login=0;
    }
}