export { registro };
export { contraseña };
export { clienteNuevo }
import { confirmarOpcion } from "./confirmarOpcion.js";
import { contRegistro } from "./login.js";
import { tipoIdent, identify, user, pws, email, saldo } from "./login.js";
import { account } from "./InicioSesion.js";

let completoID = 0;
let clienteNuevo = parseInt(0)//cero(0) para cliente nuevo, uno(1) para cliente existente
//funcion para registro de usuario
function registro() {
    

    do {
        let tipoId = parseInt(prompt(`Ingresa tu identificación \n1. C.C \n2. T.I \n3. NIT`));//se agrega parseInt para que el valor de tipoId no sea string
        switch (tipoId) {
            case 1:
                tipoIdent[contRegistro] = "C.C";//se almacena C.C en el array tipoIdent en la posición de contRegistro
                break;
            case 2:
                tipoIdent[contRegistro] = "T.I";//se almacena T.I en el array tipoIdent en la posición de contRegistro
                break;
            case 3:
                tipoIdent[contRegistro] = "NIT";//se almacena NIT en el array tipoIdent en la posición de contRegistro
                break;
            default:
                console.log("Dato incorrecto");//si el usuario selecciona opción no valida
                break;
        }
        //El bucle se repite siempre y cuando, el usuario quiera elegir otro tipo de ID, validacion almacenada en la funcion confirmarOpcion
    } while (confirmarOpcion(completoID) != 1);//funcion ubicada en confirmarOpcion.js // si devuelve 1 es para guardar la seleccion y continua

    //Se agrega campo de registro de identificacion
    let identificacion = 0;
    let repetir= parseInt(0);
    do {
        repetir =0;
        identificacion = (prompt(`Ingresa tu numero de ${tipoIdent[contRegistro]}`)); // pedimos el numero de identificacion al usuario
        // validamos que el valor no venga vacío, null o NaN y que no tenga números negativos o con más de 10 cifras
        if (identificacion !== null && identificacion !== "" && !isNaN(identificacion) && identificacion>0 && identificacion<10000000000) {
            if (identify.includes(identificacion)) {//validacion para verificar si la cedula ingresada ya se encuentra en el array
                clienteNuevo = 1;//este numero de identificacion ya se encuentra almacenado
            }else{
                alert("Identificacion ingresada: " + identificacion)// mensaje para que confirmemos que la identificacion su este correcta
                if (confirmarOpcion(completoID) == 1) {//confirmacion para guardar datos
                    identify[contRegistro] = identificacion;//guardamos la identificacion en el array identify[contRegistro]

                } else {
                    alert("Intenta nuevamente")
                    repetir+=1;//incrementamos el valor para que se repita el do-while
                }
            }
        }
        else{
            alert("Solo se permiten numeros o numero valido")//mensaje pos si se ingresa algun valor que no sea entero positivo de maximo 10 cifras
            repetir+=1;//incrementamos el valor para que se repita el do-while
        }
    } while (repetir != 0);

    if(clienteNuevo === 0){//si el cliente es nuevo, se realiza el registro
        //Se agrega campo de registro de usuario
        do {
            repetir = 0;
            let userReg = prompt(`Ingresa usuario (ej. PROJAS)`);//solicitamos un usuario
            if (userReg != null && userReg != "") {//verificamos que el campo no venga vacio o null
                alert("Usuario es: " + userReg)//mensaje para que se confirme que el usuario este bien escrito
                if (confirmarOpcion(completoID) == 1) {//una ves tengamos la confirmacion del usuario
                    user[contRegistro] = userReg;//almacenamos los datos en user[contRegistro]
                } else {
                    repetir = 1;//en caso que el cliente elija repetir el ingreso de usuario
                }

            }
        } while (repetir != 0);

        //Se agrega campo de registro de email
        do {
            repetir = 0;
            let emailReg = prompt(`Ingresa un correo electronico (ej. projas@example.com)`);//solicitamos un email
            alert("Correo ingresado: " + emailReg)//mensaje para que se confirme que el email este bien escrito
            if (emailReg != null && emailReg != "") {//verificamos que el campo no venga vacio o null
                if (confirmarOpcion(completoID) == 1) {//mensaje para que se confirme que el email este bien escrito
                    email[contRegistro] = emailReg;//almacenamos los datos en email[contRegistro]
                } else {
                    repetir = 1;
                }

            }
        } while (repetir != 0);

        //Se agrega funcion de registro de contraseña
        contraseña();
        saldo[contRegistro]=0;
    }
}//Fin de la función Registro

//funcion para el ingreso de contraseña
function contraseña(antiguo) {
    let antiguo1 = antiguo;//si llega valor 1 se usa para usuarios que quieren cambiar su contraseña
    let repetir = parseInt(0);

    do {
        repetir = 0;
        let password = parseInt(prompt(`Ingresa una clave de 4 digitos (ej. 1562)`));
        if (password != null && password != "" && password >= 999 && password < 10000) {
            let confirmPassword = parseInt(prompt(`Confirmar contraseña (ej. 1562))`));
            if (password === confirmPassword) {//verificamos que el usuario si ingrese la contraseña correctamente 
                if (confirmarOpcion(completoID) == 1) {//confirmacion de guardado de datos
                    if (antiguo1 == 1) {//se aplica para usuario ya registrados en caso que quieran realizar cambio de contraseña
                        return pws[account] = password; //se retorna la nueva contraseña a cambiarContraseña en opcionesCuenta.js
                    } else {//si es para usuarios nuevos
                        pws[contRegistro] = password;
                    }
                }
                else{
                    repetir =1;
                }
            } else {
                console.log("La clave ingresada no es correcta, intentar de nuevo");
                repetir = 1; //cuando esta variable es 1, se repetira el dowhile
            }
        } else {
            repetir = 1;
        }
    } while (repetir != 0);
}