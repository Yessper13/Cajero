import { user, pws } from "./login.js";



let aprobacionLogin=parseInt(0);
var account=parseInt();//variable para guardar el numero de cuenta y ubicar la posicion de los vectores a comparar en la funcion inicioSesion
//funcion inicio de sesion
function inicioSesion(){
    let repetir=parseInt();//Variable para manipular bucle inicio sesion
    let tryPws = parseInt(0);
    let intentos =parseInt(3)
    do{//Bucle inicio sesion
        aprobacionLogin=0;
        let passwordIn=parseInt();
        account = parseInt(prompt("Ingresa tu numero de cuenta:"));//variable para guardar el numero de cuenta y ubicar la posicion de los vectores a comparar
        let userIn = prompt(`Ingresa tu usuario (ej.PROJAS)`);//Variable para guardar el usuario y compararlo con el vector user
        //condicional para validar que coincida el ingreso a la cuenta
        if(userIn==user[account]){
            while(tryPws<3){//bucle validador de contraseña
                passwordIn = prompt(`ingresa tu contraseña de 4 digitos (ej. 1562)`);//Variable para guardar la contraseña y compararla con el vector pws
                if(passwordIn==pws[account]){
                alert("Inicio de sesion completo en la cuenta "+user[account]);//mensaje de bienvenida
                tryPws=3 //Se asigna el valor de 3 al tryPws para salir del while
                aprobacionLogin=1;//Valor que me aprueba la continuacion con las opciones dentro de la cuenta
                repetir=2;//asignacion de valor para salir del ciclo y continuar
                }
                else{
                    alert("No coinciden la contraseña tienes: "+(intentos-1)+" intentos");//mensaje de error por contraseña o usuario incorrecto
                    intentos-=1
                    tryPws+=1
                    }
            }
            if(tryPws==3 && passwordIn!=pws[account]){
                alert("Cuenta bloqueada por 24H")
            }
        }
        else{
            repetir=parseInt(prompt("Datos incorrectos deseas volver a intentarlo \n 1. Si \n 0. No, Salir"));//mensaje de error por contraseña o usuario incorrecto
            
        }
        
    }while(repetir ==1 )//fin ciclo para inicio de sesion
}
export {inicioSesion};
export {aprobacionLogin, account};


        //De aquí hacia abajo estaba el codigo donde se estaban haciendo las opciones

    