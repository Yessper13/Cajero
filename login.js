let contRegistro=0;
let tipoIdent=[];
let identify = [];

let login = parseInt(prompt("\n 1. Iniciar sesion \n 2. Registrar \n Elige respuesta (valida)"));//Inicio programa, solicitando login

//selector para iniciar sesion o registrarse
switch (login) {
    case 1:
        inicioSesion();//Invoca funcion que solicita parametros de inicio

        break;
    case 2:
        registro();//Invoca funcion que solicita parametros de registro
        console.log("Valor de contRegistro:", contRegistro);
        break;       
    default: console.log(`Por favor ingresa una opcion valida`);
    break;
    
}

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
    }while(confirmarOpcion()!=1);
   
    //Se agrega registro de identificacion
    let identificacion = 0;
    do { 
        identificacion =parseInt(prompt(`Ingresa tu numero de ${tipoIdent[contRegistro]}`));
        if (identificacion !== null && identificacion !== "" && !isNaN(identificacion)) {
            if (confirmarOpcion()==1) {
                identify[contRegistro]=identificacion;
                console.log("Tipo de identificación ingresado:", tipoIdent[contRegistro]);  
                console.log("Numero de",tipoIdent[contRegistro],":",identify[contRegistro]);
                contRegistro+=1;
            } 
        }
        
        
    }while(identificacion === "" || identificacion === null || isNaN(identificacion) || confirmarOpcion()!=1);
        
    


/*
    let userReg = prompt(`Crea un usuario de al menos 8 caracteres (ej. PROJAS)`);
     
    
    let email = prompt(`Ingresa un correo electronico`);
    let paswordReg = parseInt(prompt(`Ingresa una clave de 4 digitos (ej. 1562)`));
    let confirmarPsw = parseInt(prompt(`Confirma tu clave (ej. 1562)`)); */
}

function confirmarOpcion() {
    completoID=parseInt(prompt("Desea guardar su respuesta \n 1. Si \n 0. No, repetir"));
    return completoID;
}

//funcion para inicio de sesion de usuario
function inicioSesion(){
    let userIn = prompt(`Ingresa tu usuario (ej.PROJAS)`);
    let paswordIn = parseInt(prompt(`ingresa tu contraseña de 4 digitos (ej. 1562)`));
}
