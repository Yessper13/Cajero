let contRegistro=0;
let tipoIdent=[];
let identify = [];
let user = []; 
let email = [];
let pws = [];

menuPrincipal();
function menuPrincipal() {
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
}

//funcion para registro de usuario
function registro(){ 
    let completoID=0;
    let identificacion = 0;
    let repetir =0;
    let respuesta;
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
        respuesta = tipoIdent[contRegistro];
     //solo bucle se repite siempre y cuando, el usuario quiera elegir otro tipo de ID 
    }while(confirmarOpcion(respuesta)!=1);
   
    //Se agrega campo de registro de identificacion
    do { 
        repetir = 0;
        identificacion =parseInt(prompt(`Ingresa tu numero de ${tipoIdent[contRegistro]}`));
        if (identificacion !== null && identificacion !== "" && !isNaN(identificacion)) {
            respuesta = identificacion;
            if (confirmarOpcion(respuesta)==1) {
                identify[contRegistro]=identificacion;

                
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
            respuesta = userReg;
            if (confirmarOpcion(respuesta)==1) {
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
            respuesta = emailReg;
            if (confirmarOpcion(respuesta)==1) {
                email[contRegistro]=emailReg;
            }else{
                repetir =1;
            }

        }
    } while (repetir !=0);

    //Se agrega campo de password y confirmación de password
    do {
        repetir = 0;
        let password = prompt(`Ingresa una clave de 4 digitos (ej. 1562)`);
        let confirmPassword = prompt(`Confirmar contraseña (ej. 1562))`);
        if(password != null && password != ""){
            respuesta = password;
            if (confirmarOpcion(respuesta)==1) {
                if (password === confirmPassword) {
                    pws[contRegistro]=password;
                    contRegistro+=1;
                    menuPrincipal();                  
                    
                }else{
                    repetir = parseInt(prompt("las claves ingresadas no coinciden. \n 1. intentar de nuevo"));
                    
                }              
            }else{
                repetir =1;
            }

        }
    } while (repetir !=0);
}

//funcion para inicio de sesion de usuario
function inicioSesion(){
    let userIn = prompt("Ingresa tu usuario (ej. PROJAS)");
    let index = user.indexOf(userIn);
    if(index !== -1){ 
        let passwordIn = prompt("Ingresa tu contraseña de 4 dígitos (ej. 1562)");
        if(passwordIn === pws[index]){
            let welcome = prompt(`Hola ${user[index]}, Bienvenido \n 1. Transferir \n 2. Retirar`);
            if (welcome === "1") { 
                console.log("Tipo de identificación ingresado:", tipoIdent[index]);  
                console.log("Número de", tipoIdent[index], ":", identify[index]);
                console.log("Tu usuario es", user[index]);
                console.log("Tu correo es", email[index]);
                console.log("Tu password es", pws[index]); 
            } else {
                console.log("Llegó al else");
            }
        } else {
            console.log("La contraseña no es correcta");
        }
    } else {
        console.log("Usuario no encontrado");
    }
}

//funcion para confirmar campos de registro antes de guardar los datos
function confirmarOpcion(respuesta) {
    completoID=parseInt(prompt(`Desea guardar su respuesta: ${respuesta}\n 1. Si \n 0. No, repetir`));
    return completoID;
}


