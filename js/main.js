console.log("Bienvenido!");
console.log("Por favor seleccione una de las opciones:");
console.log("1 - Elegir piezas");
console.log("2 - Ingresar un presupuesto");
console.log("3 - Comprar PC armada")
console.log("-------------------------------------");

let opcion = parseInt(prompt("Elija una opción:"));

function presupuestoIngresado(presupuesto){
    console.log("su presupuesto es de: $" + presupuesto);
}


let arrayProcesadores = ["1 - i3: $60.000", "2 - i5: $110.000","3 - i7: $210.000"];
let arrayPlacaBase = ["1 - H610M: $94.000", "2 - B660M: $112.000","3 - Z790: $215.000"];
let arrayMemoriaRam = ["1 - DDR4 4gb: $14.000", "2 - DDR4 8gb: $25.000","3 - DDR4 16gb: $45.000"];
let arrayPlacaDeVideo = ["1 - GTX 1650: $150.000", "2 - RTX 2060: $300.000","3 - RTX 3070: $500.000"];
let arrayFuenteDePoder = ["1 - 500W: $35.000", "2 - 600W: $45.000","3 - 700W: $55.000"];
let arrayDiscoDuro = ["1 - 1T: $45.000", "2 - 2T: $60.000","3 - 6T: $130.000"];
let arrayGabinete = ["1 - Gabinete Antec NX201: $35.000", "2 - Gabinete Antec NX200M: $40.000","3 - Gabinete Antec NX292: $50.000"];


let computadoras = [
    {
        procesador: "Ryzen 3 3200g",
        placaBase: "Asus A520",
        memoriaRam: "8gb",
        placaDeVideo: "No tiene",
        fuenteDePoder: "550W",
        almacenamiento: "SSD 480gb",
        gabinete: "CORSAIR CARBIDE SPEC DELTA",
        precio: 400000
    },
    {
        procesador: "i3 12100F",
        placaBase: "MSI H610M",
        memoriaRam: "16gb",
        placaDeVideo: "GTX 1650",
        fuenteDePoder: "550W",
        almacenamiento: "SSD 480gb",
        gabinete: "Gamemax NOVA N6",
        precio: 620000
    },
    {
        procesador: "Ryzen 5 7600",
        placaBase: "Gigabyte A620M",
        memoriaRam: "16gb",
        placaDeVideo: "RTX 3060",
        fuenteDePoder: "700w",
        almacenamiento: "SSD 960gb",
        gabinete: "Thermaltake TT S200",
        precio: 1000000
    }
]

let carrito = 0;

if (opcion == 1) {
    console.log("Selecciona las piezas que deseas comprar:");
    console.log("1 - Procesador");
    console.log("2 - Placa base");
    console.log("3 - Memoria Ram");
    console.log("4 - Placa de video");
    console.log("5 - Fuente de poder");
    console.log("6 - Disco duro");
    console.log("7 - Gabinete");
    console.log("8 - Salir");

    let opcionesDePiezas = 0;

    while (opcionesDePiezas !== 8) {
        opcionesDePiezas = parseInt(prompt("Seleccione las piezas que desea adquirir"));

        switch (opcionesDePiezas) {
            case 1:
                console.log("--------------------------------")
                for (let i = 0; i < arrayProcesadores.length; i+=1){
                    console.log(arrayProcesadores[i]);
                }
                opcionesDeProcesadores = parseInt(prompt("Seleccionar Procesador"));
                if (opcionesDeProcesadores == 1){
                    console.log("i3 sumado al carrito")
                    carrito += 60000
                }
                else if(opcionesDeProcesadores == 2){
                    console.log("i5 sumado al carrito")
                    carrito += 110000
                }
                else if (opcionesDeProcesadores == 3){
                    console.log("i7 sumado al carrito")
                    carrito += 210000
                }
                else {
                    console.log("Opción no válida")
                }
                break;
            case 2:
                console.log("--------------------------------")
                for (let i = 0; i < arrayPlacaBase.length; i+=1){
                    console.log(arrayPlacaBase[i]);
                }
                opcionesDePlacaBase = parseInt(prompt("Seleccionar Placa Base"));
                if (opcionesDePlacaBase == 1){
                    console.log("H610M sumado al carrito")
                    carrito += 94000
                }
                else if(opcionesDePlacaBase == 2){
                    console.log("B660M sumado al carrito")
                    carrito += 112000
                }
                else if (opcionesDePlacaBase == 3){
                    console.log("Z790 sumado al carrito")
                    carrito += 215000
                }
                else {
                    console.log("Opción no válida")
                }
                break;
            case 3:
                console.log("--------------------------------")
                for (let i = 0; i < arrayMemoriaRam.length; i+=1){
                    console.log(arrayMemoriaRam[i]);
                }
                opcionesDeMemoriaRam = parseInt(prompt("Seleccionar Procesador"));
                if (opcionesDeMemoriaRam == 1){
                    console.log("DDR4 4gb sumado al carrito")
                    carrito += 14000
                }
                else if(opcionesDeMemoriaRam == 2){
                    console.log("DDR4 8gb sumado al carrito")
                    carrito += 25000
                }
                else if (opcionesDeMemoriaRam == 3){
                    console.log("DDR4 16gb sumado al carrito")
                    carrito += 45000
                }
                else {
                    console.log("Opción no válida")
                }
                break;
            case 4:
                console.log("--------------------------------")
                for (let i = 0; i < arrayPlacaDeVideo.length; i+=1){
                    console.log(arrayPlacaDeVideo[i]);
                }
                opcionesPlacaDeVideo = parseInt(prompt("Seleccionar Procesador"));
                if (opcionesPlacaDeVideo == 1){
                    console.log("GTX 1650 sumado al carrito")
                    carrito += 150000
                }
                else if(opcionesPlacaDeVideo == 2){
                    console.log("RTX 2060 sumado al carrito")
                    carrito += 300000
                }
                else if (opcionesPlacaDeVideo == 3){
                    console.log("RTX 3070 sumado al carrito")
                    carrito += 500000
                }
                else {
                    console.log("Opción no válida")
                }
                break;
            case 5:
                console.log("--------------------------------")
                for (let i = 0; i < arrayFuenteDePoder.length; i+=1){
                    console.log(arrayFuenteDePoder[i]);
                }
                opcionesFuenteDePoder = parseInt(prompt("Seleccionar Procesador"));
                if (opcionesFuenteDePoder == 1){
                    console.log("500W sumado al carrito")
                    carrito += 35000
                }
                else if(opcionesFuenteDePoder == 2){
                    console.log("600W sumado al carrito")
                    carrito += 45000
                }
                else if (opcionesFuenteDePoder == 3){
                    console.log("700W sumado al carrito")
                    carrito += 55000
                }
                else {
                    console.log("Opción no válida")
                }
                break;
            case 6:
                console.log("--------------------------------")
                for (let i = 0; i < arrayDiscoDuro.length; i+=1){
                    console.log(arrayDiscoDuro[i]);
                }
                opcionesDiscoDuro = parseInt(prompt("Seleccionar Procesador"));
                if (opcionesDiscoDuro == 1){
                    console.log("1T sumado al carrito")
                    carrito += 45000
                }
                else if(opcionesDiscoDuro == 2){
                    console.log("2T sumado al carrito")
                    carrito += 60000
                }
                else if (opcionesDiscoDuro == 3){
                    console.log("6T sumado al carrito")
                    carrito += 130000
                }
                else {
                    console.log("Opción no válida")
                }
                break;
            case 7:
                console.log("--------------------------------")
                for (let i = 0; i < arrayGabinete.length; i+=1){
                    console.log(arrayGabinete[i]);
                }
                opcionesGabinete = parseInt(prompt("Seleccionar Procesador"));
                if (opcionesGabinete == 1){
                    console.log("Gabinete Antec NX201 sumado al carrito")
                    carrito += 35000
                }
                else if(opcionesGabinete == 2){
                    console.log("Gabinete Antec NX200M sumado al carrito")
                    carrito += 40000
                }
                else if (opcionesGabinete == 3){
                    console.log("Gabinete Antec NX292 sumado al carrito")
                    carrito += 50000
                }
                else {
                    console.log("Opción no válida")
                }
                break;
            case 8:
                console.log("--------------------------------")
                console.log("Resumen de su compra: $" + carrito);
                break;
        }
    }
}

else if (opcion == 2){
    let presupuesto = parseInt(prompt("Ingrese su presupuesto:"));
    let buscarPrecio = computadoras.filter(computadora => computadora.precio <= presupuesto);
    console.log("-------------------------");
    console.log("Te recomendamos las siguientes PC:");
    console.log(buscarPrecio);
}

else if (opcion == 3){
    for (let i = 0; i < computadoras.length; i += 1){
        console.log("-------------------------");
        console.log("PC " + (i + 1));
        console.log("Procesador: " + computadoras[i].procesador);
        console.log("Placa Base: " + computadoras[i].placaBase);
        console.log("Memoria RAM: " + computadoras[i].memoriaRam);
        console.log("Placa de video: " + computadoras[i].placaDeVideo);
        console.log("Fuente de poder: " + computadoras[i].fuenteDePoder);
        console.log("Almacenamiento: " + computadoras[i].almacenamiento);
        console.log("Gabinete: " + computadoras[i].gabinete);
        console.log("Precio: $" + computadoras[i].precio);
    }
    let pc = prompt("Seleccione una PC");
    if (pc == 1){
        console.log("-------------------------");
        console.log("PC 1 agregada al carrito");
        carrito += 400000;
        console.log("Resumen de su compra: $" + carrito);
    }
    else if (pc == 2){
        console.log("-------------------------");
        console.log("PC 2 agregada al carrito");
        carrito += 620000;
        console.log("Resumen de su compra: $" + carrito);
    }
    else if (pc == 3){
        console.log("-------------------------");
        console.log("PC 3 agregada al carrito");
        carrito += 1000000;
        console.log("Resumen de su compra: $" + carrito);
    }
    else{
        console.log("Opción no válida");
    }
}

else {
    console.log("Número ingresado no válido");
}

