let contRegistro=0;
let tipoIdent=[];

let login = parseInt(prompt("\n 1. Iniciar sesion \n 2. Registrar \n Elige respuesta (valida)"));//Inicio programa, solicitando login

//selector para iniciar sesion o registrarse
switch (login) {
    case 1:
        inicioSesion();//Invoca funcion que solicita parametros de inicio

        break;
    case 2:
        registro();//Invoca funcion que solicita parametros de registro
        break;       

    
    default: console.log(`Por favor ingresa una opcion valida`);
    break;
    
}

//funcion para registro de usuario
function registro(){ 
    let completoID=0;
    do{
    let tipoId = parseInt(prompt(`Ingresa tu identificación \n CC.1 \n TI.2 \n DNI.3`));//se agrega parseInt para que el valor de tipoId no sea string
    //Switch para revisar que tipo de identificacion tiene la persona
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
            console.log("Dato incorrecto")
            break; 
    }
    completoID=parseInt(prompt("Desea guardar su respuesta \n 1. Si \n 0. No, repetir"));//Se guarda valor de variable para saber si se repite o no el ciclo
    if(completoID==1){//Si la conficion es 1. (guardar repuesta), se incrementa 1 en contRegistro para que la proxima vez el dato a guardar dentro del arreglo sea el consecutivo
        contRegistro+=1;
    }
    }while(completoID!=1);
    

    /* let identificacion = parseInt(prompt(`Ingresa tu numero de ${tipoIdent}`));
    let userReg = prompt(`Crea un usuario de al menos 8 caracteres (ej. PROJAS)`);
    let email = prompt(`Ingresa un correo electronico`);
    let paswordReg = parseInt(prompt(`Ingresa una clave de 4 digitos (ej. 1562)`));
    let confirmarPsw = parseInt(prompt(`Confirma tu clave (ej. 1562)`)); */
}

//funcion para inicio de sesion de usuario
function inicioSesion(){
    let userIn = prompt(`Ingresa tu usuario (ej.PROJAS)`);
    let paswordIn = parseInt(prompt(`ingresa tu contraseña de 4 digitos (ej. 1562)`));
}
