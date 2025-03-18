import { aprobacionLogin,account } from './InicioSesion.js'
import { saldo,user,pws } from "./login.js";
import { contraseña } from './Registro.js';

function Opciones() {
    function Transferencia(){
        let loop1=parseInt(1);
        do{//Loop para iniciar Transferencia
        
        let consig=parseInt(prompt("A cual cuenta deseas transferir?"));
        let chkconsig=parseInt(prompt("Confirma la cuenta a la cual cuenta deseas transferir"));

        if(consig==chkconsig && consig!=account){
            let loop2=parseInt();
            do{//Loop para validar valor a consignar
                let valorconsig=parseFloat(prompt("Ingresa el valor a transferir"))
                if(valorconsig<=saldo[account] && valorconsig>0 ){
                    saldo[consig]+=valorconsig;
                    saldo[account]-=valorconsig;
                    alert("La consignacion se ha realizado con exito a la cuenta "+consig+" ,por un valor de: "+valorconsig+"$")
                    loop2=0;
                    loop1=0;        
                }
                else{
                    alert("Valor de transaccion no valida o tienes saldo insuficiente")
                    loop2=parseInt(prompt("1. para ingresar otro valor \n 0. para salir"))
                    if(loop2==0){
                        loop1=0
                    }
                }
            }while(loop2==1)  
        }
        else{loop1 = parseInt(prompt("Cuenta invalida \n 1. para intentar de nuevo \n 0. Salir"));
        }
    }while(loop1==1)
    /* optionsInside=parseInt(prompt("Deseas realizar algo mas? \n 1. si \n 0. no, salir")); //Validacion para iniciar de nuevo el bucle de opciones optionsInside */
    }

    function Retiro(){
            let loopR=parseInt(1);
        do{
            let retiro=parseInt(prompt("Ingresa el valor a retirar"));
            if( retiro <= saldo[account] && retiro > 0){
                saldo[account]-=retiro;
                alert("El retiro fue de: "+retiro+"$"+" y el saldo restante es "+saldo[account]+"$");
                loopR=0
            }
            else{loopR = parseInt(prompt("Cuenta invalida \n 1. para intentar de nuevo \n 0. Salir"));
            }
        
        }while(loopR==1)//Fin de loop para retirar
    }

    function ConsultaSaldo() {
        alert("\t consulta de saldo");
        alert(`hola ${user[account]} tu sualdo actual es de: ${saldo[account]}$`);
    }

    function CambioContraseña(){
        let antiguo = parseInt(1);
        let pws1 = parseInt(prompt(`Ingresa tu contraseña actual`));//pedimos la contraseña actual al usuario
        if(pws[account] == pws1){//verificamos de que sea igual a la que esta guardada en el vector
            pws[account] = contraseña(antiguo);//igualamos pws al return enviado desde la funcion contraseña en registro.js
        }else{
            alert(`Contraseña incorrecta, intentalo de nuevo`);
        }
    }

    function RecargaSaldo(){
        alert("\t Recarga de saldo");
        let cuentaRecarga=parseFloat(prompt("Ingrese la cuenta a recargar"));
        alert("La cuenta a recargar es: "+cuentaRecarga);
        let chk=parseFloat(prompt("Estas seguro? \n 1. Sí \n 0. No"))
        if(chk==1){
            let recarga=parseFloat(prompt("Ingrese el valor a recargar sin puntos ni comas \n Minimo 10.000$ y en multiplos de 10"));
            if(recarga>=10000 && recarga%10000===0){//Condicional para validar que la recarga sea superior a 10mil y en múltiplos de 10mil
            saldo[cuentaRecarga]+=recarga;
            alert("Valor recargado correctamente en la cuenta "+cuentaRecarga);//Se muestra mensaje avisando de la cuenta que se ha recargado
            }
            else{
                alert("Valor incorrecto");//Mensaje de error si los valores son incorrectos
            }
        }
        else{
            alert("Intentalo nuevamente")//Mensaje de error si el usuario marca  0. por no estar seguro de recargar a esa cuenta
        }
    }
    
    return {//Retorno de funciones dentro de la funcion principal
        Transferencia,
        Retiro,
        CambioContraseña,
        ConsultaSaldo,
        RecargaSaldo
    };
}

export {Opciones}
