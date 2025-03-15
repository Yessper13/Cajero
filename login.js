let contRegistro=0;
let tipoIdent=[];
let identify = [];
let user = []; 
let email = [];
let pws = [];
let saldo =[];
let login;
let aprobacionLogin=parseInt(0);
var account=parseInt();//variable para guardar el numero de cuenta y ubicar la posicion de los vectores a comparar en la funcion inicioSesion

do{
 login = parseInt(prompt("\n 1. Iniciar sesion \n 2. Registrar \n 0. Salir \n Elige respuesta (valida)"));//Inicio programa, solicitando login
//selector para iniciar sesion o registrarse
    switch (login) {
        case 1:
            inicioSesion();//Invoca funcion que solicita parametros de inicio
            if(aprobacionLogin==1){//comprobador de que se aprobo el login si no finaliza el switch y el programa
                let optionsInside=parseInt();
                do{//Loop para iniciar opciones   
                optionsInside=parseInt(prompt("Que deseas realizar hoy? \n 1. transferencia \n 2. Retiros \n 3. Consulta de saldo \n 4. recarga de saldo \n 5. Cambio contraseña \n 0. Salir"));
                switch(optionsInside)
                {
                    case 1:// Caso Transferencia
                        do{//Loop para iniciar Transferencia
                        let loop1=parseInt(1);
                        consig=parseInt(prompt("A cual cuenta deseas transferir?"));
                        chkconsig=parseInt(prompt("Confirma la cuenta a la cual cuenta deseas transferir"));

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
                            if (isNaN(loop1)) loop1 = 0; // Forzar salida si mete algo raro
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
                break;
            }else{
                console.log("Hasta pronto")
                login=0;
            }
        break;
        case 2:
            registro();//Invoca funcion que solicita parametros de registro
        break;       
        default: console.log(`Por favor ingresa una opcion valida`);
        break;
        
    }


}while(login !=0);
//funcion para registro de usuario
function registro(){ 
    let completoID=0;
    do{
        let tipoId = parseInt(prompt(`Ingresa tu identificación \n CC.1 \n TI.2 \n DNI.3`));//se agrega parseInt para que el valor de tipoId no sea string
        switch(tipoId){
            case 1:
            tipoIdent[contRegistro]="C.C";
            break;
            case 2:
            tipoIdent[contRegistro]="T.I";
            break;
            case 3:
            tipoIdent[contRegistro]="DNI";
            break;  
            default: 
                console.log("Dato incorrecto");
                break; 
        }
        
        
     //solo bucle se repite siempre y cuando, el usuario quiera elegir otro tipo de ID 
    }while(confirmarOpcion(completoID)!=1);
   
    //Se agrega campo de registro de identificacion
    //Se agrega campo de registro de identificacion
    let identificacion = 0;
    let repetir =0;
    let repetir =0;
    do { 
        repetir = 0;
        repetir = 0;
        identificacion =parseInt(prompt(`Ingresa tu numero de ${tipoIdent[contRegistro]}`));
        if (identificacion !== null && identificacion !== "" && !isNaN(identificacion)) {
            if (confirmarOpcion(completoID)==1) {
                identify[contRegistro]=identificacion;
                
            }else{
                repetir =1;
            }
                
            }else{
                repetir =1;
            }
        }
        
        
    }while(identificacion === "" || identificacion === null || isNaN(identificacion) || repetir !=0);
      
    //Se agrega campo de registro de usuario
    do {
        repetir = 0;
        let userReg = prompt(`Ingresa usuario (ej. PROJAS)`);
        if(userReg != null && userReg != ""){
            if (confirmarOpcion(completoID)==1) {
                user[contRegistro]=userReg;
            }else{
                repetir =1;
            }

        }
    } while (repetir !=0);

    //Se agrega campo de registro de email
    do {
        repetir = 0;
        let emailReg = prompt(`Ingresa un correo electronico (ej. projas@example.com)`);
        if(emailReg != null && emailReg != ""){
            if (confirmarOpcion(completoID)==1) {
                email[contRegistro]=emailReg;
            }else{
                repetir =1;
            }

        }
    } while (repetir !=0);

    //Se agrega campo de registro de email
    do {
        repetir = 0;
        let password = parseInt(prompt(`Ingresa una clave de 4 digitos (ej. 1562)`));
        if(password != null && password != "" && password>=999 && password<10000){
            let confirmPassword = parseInt(prompt(`Confirmar contraseña (ej. 1562))`));
                if (password === confirmPassword) {
                    if (confirmarOpcion(completoID)==1) {
                        pws[contRegistro]=password;
                    }
                    }else{
                        console.log("La clave ingresada no es correcta, intentar de nuevo");
                        repetir = 1;
                    }              
                }else{
                repetir =1;
                }
            
            
        }while (repetir !=0);
        saldo[contRegistro]=10000;
        console.log("Tu cuenta de banco tiene el numero: ",contRegistro);
        console.log("Tipo de identificación ingresado:", tipoIdent[contRegistro]);  
        console.log("Numero de",tipoIdent[contRegistro],":",identify[contRegistro]);
        console.log("Tu usuario es",user[contRegistro]);
        console.log("Tu correo es",email[contRegistro]);
        console.log("Tu password es",pws[contRegistro]);
        console.log("El saldo de la cuenta ",saldo[contRegistro]);
        contRegistro+=1;


  
}//Fin de la función Registro

//funcion confirmacion
function confirmarOpcion(completoID) {
     completoID=parseInt(prompt("Desea guardar su respuesta \n 1. Si \n 0. No, repetir"));
    return completoID;
}


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
}
