let arrayProcesadores = [
    { img: "../img/i3.png", nombre: "i3", precio: 60000 },
    { img: "../img/i5.png", nombre: "i5", precio: 110000 },
    { img: "../img/i7.png", nombre: "i7", precio: 210000 }];

let arrayPlacaBase = [
    { img: "../img/h610m.png", nombre: "H610M", precio: 94000 },
    { img: "../img/b660m.png", nombre: "B660M", precio: 112000 },
    { img: "../img/z790.png", nombre: "Z790", precio: 215000 }];

let arrayMemoriaRam = [
    { img: "../img/4gb.png", nombre: "DDR4 4gb", precio: 14000 },
    { img: "../img/8gb.png", nombre: "DDR4 8gb", precio: 25000 },
    { img: "../img/16gb.png", nombre: "DDR4 16gb", precio: 45000 }];

let arrayPlacaDeVideo = [
    { img: "../img/gtx1650.png", nombre: "GTX 1650", precio: 150000 },
    { img: "../img/rtx2060.png", nombre: "RTX 2060", precio: 300000 },
    { img: "../img/rtx3070.png", nombre: "RTX 3070", precio: 500000 }];

let arrayFuenteDePoder = [
    { img: "../img/500w.png", nombre: "500w", precio: 35000 },
    { img: "../img/600w.png", nombre: "600w", precio: 45000 },
    { img: "../img/700w.png", nombre: "700w", precio: 55000 }];

let arrayAlmacenamiento = [
    { img: "../img/1tb.png", nombre: "1TB", precio: 45000 },
    { img: "../img/2tb.png", nombre: "2TB", precio: 60000 },
    { img: "../img/6tb.png", nombre: "6TB", precio: 130000 }];

let arrayGabinete = [
    { img: "../img/antecNX201.png", nombre: "Gabinete Antec NX201", precio: 35000 },
    { img: "../img/antecNX200M.png", nombre: "Gabinete Antec NX200M", precio: 40000 },
    { img: "../img/antecNX292.png", nombre: "Gabinete Antec NX292", precio: 50000 }];

let pc = [
    {
        img: "../img/pc1.png",
        nombre: "PC 1",
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
        img: "../img/pc2.png",
        nombre: "PC 2",
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
        img: "../img/pc3.png",
        nombre: "PC 3",
        procesador: "Ryzen 5 7600",
        placaBase: "Gigabyte A620M",
        memoriaRam: "16gb",
        placaDeVideo: "RTX 3060",
        fuenteDePoder: "700w",
        almacenamiento: "SSD 960gb",
        gabinete: "Thermaltake TT S200",
        precio: 1000000
    }
];

function notificacionAgregadoCarrito() {
    Toastify({
        text: "Agregado al carrito",
        duration: 2000,
        style: {
            background: "linear-gradient(to right, #535E86, #BAC2DB)",
        }
    }).showToast()
}

// Carrito

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

localStorage.setItem('carrito', JSON.stringify(carrito));
let carritoEnLs = localStorage.getItem('carrito');
carritoEnLs = JSON.parse(carritoEnLs);

function agregarCarrito(a, b) {
    carrito.push(a + " | " + b);
    localStorage.setItem('carrito', JSON.stringify(carrito));
};

const carritoImg = document.querySelector('.carritoImg');
const contenedorCarrito = document.querySelector('.contenedorCarrito');
let seccionCarrito;
let btnBorrarCarrito;

function borrarCarrito() {
    localStorage.clear();
    location.reload();
}

function mostrarCarrito() {
    let carritoObtenido = localStorage.getItem('carrito');
    carritoObtenido = JSON.parse(carritoObtenido);

    if (!seccionCarrito) {
        seccionCarrito = document.createElement('ul');
        seccionCarrito.classList.add('seccionCarrito');
        contenedorCarrito.appendChild(seccionCarrito);
    }
    else {
        while (seccionCarrito.firstChild) {
            seccionCarrito.removeChild(seccionCarrito.firstChild);
        }
    }

    let valorTotalCarrito = 0;

    if (carritoObtenido.length > 0) {
        carritoObtenido.forEach(function (productoCarrito) {
            const [nombre, precio] = productoCarrito.split("|").map(item => item.trim());
            valorTotalCarrito += parseFloat(precio);
            const listadoCarrito = document.createElement('li');
            listadoCarrito.classList.add('listadoCarrito');
            listadoCarrito.textContent = `Producto: ${nombre} | Precio: $${precio}`;
            seccionCarrito.appendChild(listadoCarrito);
        });

        const totalCarrito = document.createElement('li');
        totalCarrito.classList.add('listadoCarrito');
        totalCarrito.textContent = `Total de la compra: $${valorTotalCarrito}`;
        seccionCarrito.appendChild(totalCarrito);

        btnBorrarCarrito = document.createElement('button');
        btnBorrarCarrito.classList.add('btnBorrarCarrito');
        seccionCarrito.appendChild(btnBorrarCarrito);
        btnBorrarCarrito.textContent = "Vaciar carrito";
        btnBorrarCarrito.addEventListener('click', borrarCarrito);
    }
    else {
        const listadoCarrito = document.createElement('li');
        listadoCarrito.classList.add('listadoCarrito');
        listadoCarrito.textContent = "El carrito está vacio";
        seccionCarrito.appendChild(listadoCarrito);
    }
}

carritoImg.addEventListener('click', mostrarCarrito);


// Seccion Piezas

const opcionesPieza = document.getElementById("opcionesPieza");
const piezas = document.querySelectorAll('.piezas');

piezas.forEach((pieza) => {
    pieza.addEventListener('click', () => {
        let arrayOpciones = [];
        switch (pieza.id) {
            case "procesador":
                arrayOpciones = arrayProcesadores;
                break;
            case "placaBase":
                arrayOpciones = arrayPlacaBase;
                break;
            case "memoriaRam":
                arrayOpciones = arrayMemoriaRam;
                break;
            case "placaDeVideo":
                arrayOpciones = arrayPlacaDeVideo;
                break;
            case "fuenteDePoder":
                arrayOpciones = arrayFuenteDePoder;
                break;
            case "almacenamiento":
                arrayOpciones = arrayAlmacenamiento;
                break;
            case "gabinete":
                arrayOpciones = arrayGabinete;
                break;
        }

        opcionesPieza.innerHTML = '';
        arrayOpciones.forEach((opcion) => {
            const opcionPieza = document.createElement("li");
            opcionPieza.classList.add('opcionPieza');
            opcionPieza.innerHTML = `
                    <img src="${opcion.img}" alt="${opcion.nombre}" class= "imgOpcionPieza">
                    <p class= "opcionPiezaDetalle">${opcion.nombre}</p>
                    <p class= "opcionPiezaDetalle">$${opcion.precio}</p>
                    <button class= "btnAgregarCarrito">Agregar al carrito</button>
                `;

            opcionesPieza.appendChild(opcionPieza);

            const btnAgregarCarrito = opcionPieza.querySelector('.btnAgregarCarrito');

            btnAgregarCarrito.addEventListener('click', () => {
                agregarCarrito(opcion.nombre, opcion.precio)
                notificacionAgregadoCarrito();
            });
        });
    });
});

// Seccion Ingresar Presupuesto

const formulario = document.querySelector('.formulario');
const pcEncontrada = document.querySelector('#pcEncontrada');

function mostrarPcFiltrada(pcs) {
    pcEncontrada.innerHTML = '';

    if (pcs.length > 0) {
        pcs.forEach(pc => {
            const pcContenedor = document.createElement('div');
            pcContenedor.classList.add('msgPc');

            const pcTitulo = document.createElement('img');
            pcTitulo.classList.add('imgPc');
            pcTitulo.src = pc.img;

            const pcPrecio = document.createElement('p');
            pcPrecio.textContent = `Precio: $${pc.precio}`;

            const pcComponentes = document.createElement('p');
            pcComponentes.innerHTML = `<p>Procesador: ${pc.procesador}</p>
            <p>Placa Base: ${pc.placaBase}</p>
            <p>Memoria RAM: ${pc.memoriaRam}</p>
            <p>Placa de Video: ${pc.placaDeVideo}</p>
            <p>Fuente de Poder: ${pc.fuenteDePoder}</p>
            <p>Almacenamiento: ${pc.almacenamiento}</p>
            <p>Gabinete: ${pc.gabinete}</p>`

            pcContenedor.appendChild(pcTitulo);
            pcContenedor.appendChild(pcPrecio);
            pcContenedor.appendChild(pcComponentes);

            const btnAgregarCarrito = document.createElement('button');
            btnAgregarCarrito.classList.add('btnAgregarCarrito');
            btnAgregarCarrito.textContent = 'Agregar al carrito';

            btnAgregarCarrito.addEventListener('click', () => {
                agregarCarrito(pc.nombre, pc.precio)
                notificacionAgregadoCarrito()
            });

            pcContenedor.appendChild(btnAgregarCarrito);
            pcEncontrada.appendChild(pcContenedor);
        });
    }
    else {
        const noEncontrada = document.createElement('p');
        noEncontrada.classList.add('noEncontrada');
        noEncontrada.textContent = 'No encontramos una PC que se adapte a su presupuesto.';
        pcEncontrada.appendChild(noEncontrada);
    }
}

function buscarPc(evt) {
    evt.preventDefault();
    let presupuesto = parseInt(document.querySelector('.campo').value);
    const pcsFiltradas = pc.filter(valor => valor.precio <= presupuesto);
    pcsFiltradas.sort((a, b) => Math.abs(a.precio - presupuesto) - Math.abs(b.precio - presupuesto));
    mostrarPcFiltrada(pcsFiltradas.length > 0 ? [pcsFiltradas[0]] : []);
    formulario.reset();
}


formulario.addEventListener('submit', buscarPc);

// Seccion Computadoras Armadas

const computadoras = document.querySelectorAll(".computadoras");
const detalles = document.querySelectorAll(".detalles");

computadoras.forEach((item, index) => {
    item.addEventListener('click', () => {
        const pcSeleccionada = pc[index];

        detalles.forEach(detalle => {
            detalle.style.display = 'none';
        });

        const detallesSeleccionados = detalles[index];

        detallesSeleccionados.innerHTML = `
            <p>${pcSeleccionada.nombre}</p>
            <p>Procesador: ${pcSeleccionada.procesador}</p>
            <p>Placa Base: ${pcSeleccionada.placaBase}</p>
            <p>Memoria RAM: ${pcSeleccionada.memoriaRam}</p>
            <p>Placa de Video: ${pcSeleccionada.placaDeVideo}</p>
            <p>Fuente de Poder: ${pcSeleccionada.fuenteDePoder}</p>
            <p>Almacenamiento: ${pcSeleccionada.almacenamiento}</p>
            <p>Gabinete: ${pcSeleccionada.gabinete}</p>
            <p>Precio: $${pcSeleccionada.precio}</p>
            <button class= "btnAgregarCarrito">Agregar al carrito</button>
        `;

        detallesSeleccionados.style.display = 'block';

        const btnAgregarCarrito = item.querySelector('.btnAgregarCarrito');

        btnAgregarCarrito.addEventListener('click', () => {
            agregarCarrito(pcSeleccionada.nombre, pcSeleccionada.precio)
            notificacionAgregadoCarrito();
        });
    });
});
