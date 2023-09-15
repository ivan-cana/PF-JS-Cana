console.log("Bienvenido!");
console.log("Por favor seleccione una de las opciones:");
console.log("1 - Elegir piezas");
console.log("2 - Ingresar un presupuesto");
console.log("-------------------------------------");

let opcion = parseInt(prompt("Elija una opción:"));

function presupuestoIngresado(presupuesto){
    console.log("su presupuesto es de: $" + presupuesto);
}

if (opcion == 1) {
    console.log("Selecciona las piezas que deseas comprar:");
    console.log("1 - Procesador $80.000");
    console.log("2 - Placa base $70.000");
    console.log("3 - Memoria Ram $24.000");
    console.log("4 - Placa de video $200.000");
    console.log("5 - Fuente de poder $50.000");
    console.log("6 - Disco duro $45.000");
    console.log("7 - Gabinete $35.000");
    console.log("8 - Salir");

    let opcionesDePiezas = 0;
    let carrito = 0;

    while (opcionesDePiezas !== 8) {
        opcionesDePiezas = parseInt(prompt("Seleccione las piezas que desea adquirir"));

        switch (opcionesDePiezas) {
            case 1:
                console.log("Procesador sumado al carrito");
                carrito += 80000;
                break;
            case 2:
                console.log("Placa base sumada al carrito");
                carrito += 70000;
                break;
            case 3:
                console.log("Memoria Ram sumada al carrito");
                carrito += 24000;
                break;
            case 4:
                console.log("Placa de video sumada al carrito");
                carrito += 200000;
                break;
            case 5:
                console.log("Fuente de poder sumada al carrito");
                carrito += 50000;
                break;
            case 6:
                console.log("Disco duro sumado al carrito");
                carrito += 45000;
                break;
            case 7:
                console.log("Gabinete sumado al carrito");
                carrito += 35000;
                break;
            case 8:
                console.log("Resumen de su compra: $" + carrito);
                break;
        }
    }
}

else if (opcion == 2){
    let presupuesto = parseInt(prompt("Ingrese su presupuesto:"));
    
    if(presupuesto <= 250000){
        presupuestoIngresado(presupuesto);
        console.log("Puede adquirir una computadora de gama baja");
    }
    else if(presupuesto >250000 && presupuesto < 500000){
        presupuestoIngresado(presupuesto);
        console.log("Puede adquirir una computadora de gama media");
    }
    else if(presupuesto >= 500000){
        presupuestoIngresado(presupuesto);
        console.log("Puede adquirir una computadora de gama alta");
    }
    else{
        console.log("ERROR");
    }
}

else {
    console.log("Número ingresado no válido");
}

