export { registro };
export { contraseña };
import { confirmarOpcion } from "./login.js";
import { contRegistro } from "./login.js"; 
import { tipoIdent, identify, user, pws, email, saldo } from "./login.js";
import { account } from "./InicioSesion.js";
let completoID=0;
//funcion para el ingreso de contraseña
function contraseña(antiguo) {//VALIDAR PORQUE ESTA FUNCION NO DEJA GUARDAR LA CONTRASEÑA DEL CAMBIO
    let antiguo1=antiguo;
    let repetir=parseInt(0); 
    do {
        repetir=0;
        let password = parseInt(prompt(`Ingresa una clave de 4 digitos (ej. 1562)`));
        
        if (password != null && password != "" && password >= 999 && password < 10000) {
            let confirmPassword = parseInt(prompt(`Confirmar contraseña (ej. 1562))`));
            if (password === confirmPassword) {
                if (confirmarOpcion(completoID) == 1) {
                    if(antiguo1 ==1){
                        pws[account] = password; 
                    }else{
                        pws[contRegistro] = password;
                    }
                }
            } else {
                console.log("La clave ingresada no es correcta, intentar de nuevo");
                repetir = 1; //cuando esta variable es 1, se repetira el dowhile
            }
        } else {
            repetir = 1;
        }
        
    }while (repetir !=0);          
}
//funcion para registro de usuario
function registro(){ 
    
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
        
     //El bucle se repite siempre y cuando, el usuario quiera elegir otro tipo de ID 
    }while(confirmarOpcion(completoID)!=1);
   
    //Se agrega campo de registro de identificacion
    let identificacion = 0;
    let repetir =0;
    do { 
        repetir = 0;
        identificacion =parseInt(prompt(`Ingresa tu numero de ${tipoIdent[contRegistro]}`));
        if (identificacion !== null && identificacion !== "" && !isNaN(identificacion)) {
            alert("Identificacion ingresada: "+identificacion)
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
            alert("Usuario es: "+userReg)
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
        alert("Correo ingresado: "+emailReg)
        if(emailReg != null && emailReg != ""){
            if (confirmarOpcion(completoID)==1) {
                email[contRegistro]=emailReg;
            }else{
                repetir =1;
            }

        }
    } while (repetir !=0);

    //Se agrega funcion de registro de contraseña
        contraseña();
        saldo[contRegistro]+=0
        


  
}//Fin de la función Registro