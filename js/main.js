console.log("Bienvenido!");
console.log("Por favor seleccione una de las opciones:");
console.log("1 - Elegir piezas");
console.log("2 - Ingresar un presupuesto");
console.log("3 - Comprar PC armada")
console.log("-------------------------------------");

let opcion = parseInt(prompt("Elija una opción:"));

function opcion1(arrayDelProducto, nombreDelProducto, opcionDelProducto1, precioDeOpcion1, opcionDelProducto2, precioDeOpcion2, opcionDelProducto3, precioDeOpcion3) {
    console.log("--------------------------------")
    for (let i = 0; i < arrayDelProducto.length; i += 1) {
        console.log(arrayDelProducto[i]);
    }
    opcionesDelProducto = parseInt(prompt("Seleccionar "+ nombreDelProducto));
    if (opcionesDelProducto == 1) {
        console.log(opcionDelProducto1 +" sumado al carrito")
        carrito += precioDeOpcion1
    }
    else if (opcionesDelProducto == 2) {
        console.log(opcionDelProducto2 +" sumado al carrito")
        carrito += precioDeOpcion2
    }
    else if (opcionesDelProducto == 3) {
        console.log(opcionDelProducto3 + " sumado al carrito")
        carrito += precioDeOpcion3
    }
    else {
        console.log("Opción no válida")
    }
};

function opcion3(numero, precio) {
    console.log("-------------------------");
    console.log("PC " + numero + " agregada al carrito");
    carrito += precio;
    console.log("Resumen de su compra: $" + carrito);
};


let arrayProcesadores = ["1 - i3: $60.000", "2 - i5: $110.000", "3 - i7: $210.000"];
let arrayPlacaBase = ["1 - H610M: $94.000", "2 - B660M: $112.000", "3 - Z790: $215.000"];
let arrayMemoriaRam = ["1 - DDR4 4gb: $14.000", "2 - DDR4 8gb: $25.000", "3 - DDR4 16gb: $45.000"];
let arrayPlacaDeVideo = ["1 - GTX 1650: $150.000", "2 - RTX 2060: $300.000", "3 - RTX 3070: $500.000"];
let arrayFuenteDePoder = ["1 - 500W: $35.000", "2 - 600W: $45.000", "3 - 700W: $55.000"];
let arrayDiscoDuro = ["1 - 1T: $45.000", "2 - 2T: $60.000", "3 - 6T: $130.000"];
let arrayGabinete = ["1 - Gabinete Antec NX201: $35.000", "2 - Gabinete Antec NX200M: $40.000", "3 - Gabinete Antec NX292: $50.000"];


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
                opcion1(arrayProcesadores, "Procesador", "i3", 60000, "i5", 110000, "i7", 210000);
                break;
            case 2:
                opcion1(arrayPlacaBase, "Placa Base", "H610M", 94000, "B660M", 112000, "Z790", 215000);
                break;
            case 3:
                opcion1(arrayMemoriaRam, "Memoria Ram", "DDR4 4gb", 14000, "DDR4 8gb", 25000, "DDR4 16gb", 45000);
                break;
            case 4:
                opcion1(arrayPlacaDeVideo, "Placa de video", "GTX 1650", 150000, "RTX 2060", 300000, "RTX 3070", 500000);
                break;
            case 5:
                opcion1(arrayFuenteDePoder, "Fuente de poder", "500W", 35000, "600W", 45000, "700W", 55000);
                break;
            case 6:
                opcion1(arrayDiscoDuro, "Disco Duro", "1T", 45000, "2T", 60000, "6T", 130000);
                break;
            case 7:
                opcion1(arrayGabinete, "Gabinete", "Gabinete Antec NX201", 35000, "Gabinete Antec NX200M", 40000, "Gabinete Antec NX292", 50000);
                break;
            case 8:
                console.log("--------------------------------")
                console.log("Resumen de su compra: $" + carrito);
                break;
        }
    }
}

else if (opcion == 2) {
    let presupuesto = parseInt(prompt("Ingrese su presupuesto:"));
    let buscarPrecio = computadoras.filter(computadora => computadora.precio <= presupuesto);
    console.log("-------------------------");
    console.log("Te recomendamos las siguientes PC:");
    console.log(buscarPrecio);
}

else if (opcion == 3) {
    for (let i = 0; i < computadoras.length; i += 1) {
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
    if (pc == 1) {
        opcion3(1, 400000);
    }
    else if (pc == 2) {
        opcion3(2, 620000);
    }
    else if (pc == 3) {
        opcion3(3, 1000000);
    }
    else {
        console.log("Opción no válida");
    }
}

else {
    console.log("Número ingresado no válido");
}

