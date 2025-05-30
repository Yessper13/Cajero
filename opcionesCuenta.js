import { account } from './InicioSesion.js'
import { contraseña } from './Registro.js';
import { idHistorico,idRecepcion,historial, historialR,saldo,user,pws } from './login.js';
export {Opciones};
let contHist =parseInt(0);
function Opciones() {
    function Transferencia(){
        let loop1=parseInt(1);
        do{//Loop para iniciar Transferencia
        
        let consig=parseInt(prompt("A cual cuenta deseas transferir?"));//preguntamos al usuario a que cuenta desea transferir
        let chkconsig=parseInt(prompt("Confirma la cuenta a la cual cuenta deseas transferir"));//confirmamos cuenta seleccionada por el usuario

        if(consig==chkconsig && consig!=account){// validamos que la cuenta ingresada en los dos campos sea igual, pero diferente a la propia cuenta que va a tranferir
            let loop2=parseInt();
            do{//Loop para validar valor a consignar
                let valorconsig=parseFloat(prompt("Ingresa el valor a transferir"));//campo para ingresar el valor a transferir
                if(valorconsig<=saldo[account] && valorconsig>0 ){//se valida que el valor seleccionado sea menor o igual al saldo que tenemos disponible en la cuenta y que el valor a transferir sea mayor a 0
                    saldo[consig]+=valorconsig;//se incrementa el saldo en la cuenta receptora
                    saldo[account]-=valorconsig;//se resta saldo en la cuenta emisora
                    alert("La consignacion se ha realizado con exito a la cuenta "+consig+" ,por un valor de: "+valorconsig+"$");
                    loop2=0;
                    loop1=0;   
                    idHistorico[contHist]=account;//almacenamos el movimiento en el historial de transferencias
                    idRecepcion[contHist]=consig;//almacenamos el movimiento en el historial de recepciones 
                    historial.push({fecha: Date(),concepto: "Transferencia",valor: valorconsig,saldo: saldo[account],cuenta_Afectada: user[consig]});
                    historialR.push({fecha: Date(),concepto: "Recepcion",valor: valorconsig,saldo: saldo[consig],emisor:user[account]});
                    contHist+=1; //se aumenta contador de historial para almacenar otro posible movimiento
                    
                }
                else{//ecepcion para cuendo el valor ingresado super el saldo actual, o si el valor ingresado es menor a cero
                    alert("Valor de transaccion no valida o tienes saldo insuficiente");
                    loop2=parseInt(prompt("1. para ingresar otro valor \n 0. para salir"));
                    if(loop2==0){
                        loop1=0
                    }
                }
            }while(loop2==1)  //se repite mientras loop2 sea igual a 1
        }
        else{loop1 = parseInt(prompt("Cuenta invalida \n 1. para intentar de nuevo \n 0. Salir"));
        }
    }while(loop1==1)
    /* optionsInside=parseInt(prompt("Deseas realizar algo mas? \n 1. si \n 0. no, salir")); //Validacion para iniciar de nuevo el bucle de opciones optionsInside */
    }

    function Retiro(){
            let loopR=parseInt(1);
        do{
            let retiro=parseFloat(prompt("Ingresa el valor a retirar"));
            if( retiro <= saldo[account] && retiro>=10000 && retiro%10000===0){//validamos que la cantidad solicitada sea menor al saldo sisponible y que sea a partir de 10mil
                saldo[account]-=retiro;//se resta el valor de retiro al saldo actual
                alert("El retiro fue de: "+retiro+"$"+" y el saldo restante es "+saldo[account]+"$");
                loopR=0
                idHistorico[contHist]=account;// se agrega retiro movimiento al historial
                idRecepcion[contHist]=null;// se agrega recepcion como null para que las posiciones ingresadas siempre estén igualadas 
                historial.push({fecha: Date(),concepto: "Retiro",valor: retiro,saldo: saldo[account], cuenta_Afectada: "Tu cuenta"});
                historialR.push({fecha: null,concepto: null,valor: null,saldo:null,emisor:null});
                contHist+=1;//se aumenta contador de historial para almacenar otro posible movimiento
            }
            else{loopR = parseInt(prompt("Cuenta o numero invalidos \n 1. para intentar de nuevo \n 0. Salir"));
            }
        
        }while(loopR==1)//Fin de loop para retirar
    }

    function ConsultaSaldo() {
        alert("\t consulta de saldo");
        alert(`hola ${user[account]} tu sualdo actual es de: ${saldo[account]}$`); //mostramos el saldo actualizado de la cuenta en sesion
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
        alert("La cuenta a recargar es: "+account);
        let chk=parseFloat(prompt("Estas seguro? \n 1. Sí \n 0. No"));//confirmamos con usuario que la cuenta seleccionada si sea la correcta
        if(chk==1){//si la cuenta es correcta
            let recarga=parseFloat(prompt("Ingrese el valor a recargar sin puntos ni comas \n Minimo 10.000$ y en multiplos de 10"));
            if(recarga>=10000 && recarga%10000===0){//Condicional para validar que la recarga sea superior a 10mil y en múltiplos de 10mil
            saldo[account]+=recarga;//sumamos el monto de recarga al saldo actual
            alert("Valor recargado correctamente en la cuenta "+account);//Se muestra mensaje avisando de la cuenta que se ha recargado
            idHistorico[contHist]=account;//agregamos la recarga de saldo al historial de movimientos
            idRecepcion[contHist]=null;//se agrega recepcion como null para que las posiciones ingresadas siempre estén igualadas 
            historial.push({fecha: Date(),concepto: "Recarga de saldo",valor: recarga,saldo: saldo[account],cuenta_Afectada: user[account]});
            historialR.push({fecha: null,concepto: null,valor: null,saldo:null,emisor:null});
            contHist+=1;//se aumenta contador de historial para almacenar otro posible movimiento
            }
            else{
                alert("Valor incorrecto");//Mensaje de error si los valores son incorrectos
            }
        }
        else{
            alert("Intentalo nuevamente");//Mensaje de error si el usuario marca  0. por no estar seguro de recargar a esa cuenta
        }
    }
    
    function HistorialMovimientos() { //Realizar funciones de retiro y de recarga de cuenta
        let RegistroCont=parseInt(0);
        console.log(`\t-------HISTORICO DE MOVIMIENTOS------`)
        for (let i = 0; i < idHistorico.length; i++) {
            if (idHistorico[i] === account) {//validacion donde se filtran los movimientos (tranferencia, retiro, recargaSaldo)realizados que corresponden a la cuenta almacenada en account
                console.log(`Registro ${RegistroCont + 1}\nFecha: ${historial[i].fecha}\nConcepto: ${historial[i].concepto}\nValor: ${historial[i].valor}\nSaldo Actual: ${historial[i].saldo}\nCuenta afectada: ${historial[i].cuenta_Afectada}`);            
                RegistroCont++;//se incrementa el contador de registro para mostrar todos los movimientos
            }else if(idRecepcion[i] === account){//validacion en donde se traen las recepciones correspondientes a la cuenta almacenada en account
                console.log(`Registro ${RegistroCont + 1}\nFecha: ${historialR[i].fecha}\nConcepto: ${historialR[i].concepto}\nValor: ${historialR[i].valor}\nSaldo Restante: ${historialR[i].saldo}\nEmisor: ${historialR[i].emisor}`);
                RegistroCont++;//se incrementa el contador de registro para mostrar todas las recepciones
            }
        }      
    }
    return {
        Transferencia,
        Retiro,
        CambioContraseña,
        ConsultaSaldo,
        RecargaSaldo,
        HistorialMovimientos

    };
}

