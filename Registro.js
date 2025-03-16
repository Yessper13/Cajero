export { registro };
import { confirmarOpcion } from "./login.js";
import { contRegistro } from "./login.js"; 
import { tipoIdent, identify, user, pws, email, saldo } from "./login.js";
 

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
    let identificacion = 0;
    let repetir =0;
    do { 
        repetir = 0;
        identificacion =parseInt(prompt(`Ingresa tu numero de ${tipoIdent[contRegistro]}`));
        if (identificacion !== null && identificacion !== "" && !isNaN(identificacion)) {
            if (confirmarOpcion(completoID)==1) {
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
        
        


  
}//Fin de la función Registro