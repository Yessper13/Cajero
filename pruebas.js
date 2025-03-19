import { account } from "./InicioSesion";

let fecha =new Date();
let concepto = "transferencia"
let valor = parseInt(1000)
let saldo =  parseInt(1000)


 const Historial = {
    0: {fecha,
    concepto,
    valor,
    saldo}
}
for (let key in Historial){
    console.log(key, Historial[key])
} 

let historial1 = [];

historial1.push({
    fecha: Date(),
    concepto: "transferencia",
    valor: 2000,
    saldo: 8000

})

historial1.push({fecha: Date(),concepto: "Retiro",valor: 2000,salo:8000,receptor:"0"});

console.log(historial1)


/////////////////////////////////////




let idHistorico = [];
let contHist = parseInt(0);

function Transferencia(consulta){
    let loop1=parseInt(1);
    do{//Loop para iniciar Transferencia
    
    let consig=parseInt(prompt("A cual cuenta deseas transferir?"));
    let chkconsig=parseInt(prompt("Confirma la cuenta a la cual cuenta deseas transferir"));

    if(consig==chkconsig && consig!=account){
        let loop2=parseInt();
        do{//Loop para validar valor a consignar
            let valorconsig=parseFloat(prompt("Ingresa el valor a transferir"))
            if(valorconsig<=saldo[account] && valorconsig>0 ){
                saldo[consig]+=valorconsig;
                saldo[account]-=valorconsig;
                alert("La consignacion se ha realizado con exito a la cuenta "+consig+" ,por un valor de: "+valorconsig+"$")
                loop2=0;
                loop1=0;    
                
                idHistorico[contHist]=user[account]
                
                historial1.push({fecha: Date(),concepto: "Retiro",valor: 2000,sald:8000});

                 HistorialMovimientos(consulta, "tipoMovimiento", valorconsig){
                    
                };
                contHist++

            }
            else{
                alert("Valor de transaccion no valida o tienes saldo insuficiente")
                loop2=parseInt(prompt("1. para ingresar otro valor \n 0. para salir"))
                if(loop2==0){
                    loop1=0
                }
            }
        }while(loop2==1)  
    }
    else{loop1 = parseInt(prompt("Cuenta invalida \n 1. para intentar de nuevo \n 0. Salir"));
    }
}while(loop1==1)


/* optionsInside=parseInt(prompt("Deseas realizar algo mas? \n 1. si \n 0. no, salir")); //Validacion para iniciar de nuevo el bucle de opciones optionsInside */
}
