let contRegistro=0;
let tipoIdent=[];
let identify = [];
let user = []; 
let email = [];
let pws = [];
let comfirmPsw = [];

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
   
    //Se agrega campo de registro de identificacion
    let identificacion = 0;
    let repetir =0;
    do { 
        repetir = 0;
        identificacion =parseInt(prompt(`Ingresa tu numero de ${tipoIdent[contRegistro]}`));
        if (identificacion !== null && identificacion !== "" && !isNaN(identificacion)) {
            if (confirmarOpcion()==1) {
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
            if (confirmarOpcion()==1) {
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
            if (confirmarOpcion()==1) {
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
                if (confirmarOpcion()==1) {
                    if (password === confirmPassword) {
                        pws[contRegistro]=password;
                        console.log("Tipo de identificación ingresado:", tipoIdent[contRegistro]);  
                        console.log("Numero de",tipoIdent[contRegistro],":",identify[contRegistro]);
                        console.log("Tu usuario es",user[contRegistro]);
                        console.log("Tu correo es",email[contRegistro]);
                        console.log("Tu password es",pws[contRegistro]); 

                    }



                    }else{
                        repetir = parseInt(prompt("La clave ingresada no es correcta, \n 1. intentar de nuevo"));

                    }              
                }else{
                repetir =1;
                }
            console.log("Tu cuenta de banco tiene el numero: ",contRegistro)
            
        }while (repetir !=0);
        contRegistro+=1;


  
}//Fin de la función Registro

function confirmarOpcion() {
    completoID=parseInt(prompt("Desea guardar su respuesta \n 1. Si \n 0. No, repetir"));
    return completoID;
}

//funcion para inicio de sesion de usuario
function inicioSesion(){
    let userIn = prompt(`Ingresa tu usuario (ej.PROJAS)`);
    let paswordIn = parseInt(prompt(`ingresa tu contraseña de 4 digitos (ej. 1562)`));
}
