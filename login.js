let login = parseInt(prompt("\n 1. Iniciar sesion \n 2. Registrar \n Elige respuesta (valida)"));

switch (login) {
    case 1:
        let userIn = prompt(`Ingresa tu usuario (ej.PROJAS)`);
        let paswordIn = parseInt(prompt(`ingresa tu contraseña de 4 digitos (ej. 1562)`)); 
        
        break;
    case 2:
        let identificacion = prompt(`Ingresa tu identificaciÓn (CC. TI. DNI)`);
        let userReg = prompt(`Crea un usuario de al menos 8 caracteres (ej. PROJAS)`);
        let email = prompt(`Ingresa un correo electronico`);
        let paswordReg = pareInt(prompt(`Ingresa una clave de 4 digitos (ej. 1562)`));
        let confirmarPsw = pareInt(prompt(`Confirma tu clave (ej. 1562)`));
        break;       
    default: console.log(`Por favor ingresa una opcion valida`);
        break;
}

