// PRODUCTOS
const productos = [
    {
        id: 1,
        nombre: "Kits perfumes mini Click Hair trío capilar con 7 aromas",
        categoria: "Perfumes",
        descripcion: "Kit seduction box mini perfumes 40ml x 3",
        precio: 25000,
        imagen: "img/productos/1.jpeg"
    },
    {
        id: 2,
        nombre: "Kit línea de ají Click Hair anticaída y crecimiento capilar",
        categoria: "Capilares",
        descripcion: "Kit Capilar línea de ají anticaída",
        precio: 114120,
        precioAnterior: 126800,
        imagen: "img/productos/2.jpeg"
    },
    {
        id: 3,
        nombre: "Dúo de shampoo y acondicionador de miel Click Hair para brillo intenso",
        categoria: "Capilares",
        descripcion: "Kit Capilar Dúo brillo intenso",
        precio: 81720,
        precioAnterior: 90800,
        imagen: "img/productos/3.jpeg"
    },
    {
        id: 4,
        nombre: "Kit Mascarilla y Booster de Proteínas",
        categoria: "Mascarillas",
        descripcion: "Kit de cuidado capilar",
        precio: 59900,
        imagen: "img/productos/4.jpeg"
    },
    {
        id: 5,
        nombre: "Kit Reparación y Blindaje de Leche y Proteínas con Termoprotector",
        categoria: "Reparación y blindaje",
        descripcion: "Kit de reparación y protección capilar",
        precio: 155000,
        imagen: "img/productos/5.jpeg"
    },
    {
        id: 6,
        nombre: "Kit capilar dúo reparación intensiva Leche y Proteínas",
        categoria: "Capilares",
        descripcion: "Kit Capilar reparación intensiva",
        precio: 105000,
        imagen: "img/productos/6.jpeg"
    },
    {
        id: 7,
        nombre: "Tratamiento bomba reparadora Click Hair miel y energizante",
        categoria: "Tratamientos",
        descripcion: "Kit Tratamiento Capilar bomba reparadora",
        precio: 96120,
        precioAnterior: 106800,
        imagen: "img/productos/7.jpeg"
    },
    {
        id: 8,
        nombre: "Línea de miel brillo intenso Click Hair rutina completa",
        categoria: "Capilares",
        descripcion: "Kit Capilar línea de miel brillo intenso",
        precio: 237150,
        precioAnterior: 263500,
        imagen: "img/productos/8.jpeg"
    },
    {
        id: 9,
        nombre: "Kit miel brillo intenso Click Hair: shampoo, mascarilla y acondicionador",
        categoria: "Capilares",
        descripcion: "Kit Capilar miel brillo intenso",
        precio: 128430,
        precioAnterior: 142700,
        imagen: "img/productos/9.jpeg"
    },
    {
        id: 10,
        nombre: "Kit anticaída y reparación Click Hair con ají y miel",
        categoria: "Capilares",
        descripcion: "Kit Capilar anticaída y reparación",
        precio: 213750,
        precioAnterior: 237500,
        imagen: "img/productos/10.jpeg"
    },
    {
        id: 11,
        nombre: "Kit cuidado piel porcelana y glow Click Hair",
        categoria: "Corporales",
        descripcion: "Kit Corporal piel de porcelana y glow",
        precio: 150120,
        precioAnterior: 166800,
        imagen: "img/productos/11.jpeg"
    },
    {
        id: 12,
        nombre: "Kit perfume capilar y corporal Click Hair aroma de pies a cabeza",
        categoria: "Corporales",
        descripcion: "Kit Corporal aroma de pies a cabeza",
        precio: 214700,
        imagen: "img/productos/12.jpeg"
    },
    {
        id: 13,
        nombre: "Kit antifrizz y antiesponjamiento Click Hair con suero y miel capilar",
        categoria: "Capilares",
        descripcion: "Kit Capilar Antifrizz y Antiesponge",
        precio: 90720,
        precioAnterior: 100800,
        imagen: "img/productos/13.jpeg"
    }
];

// VARIABLES
let carrito = [];
let categoriaActual = "Todos";

const categorias = [
    "Todos",
    "Perfumes",
    "Capilares",
    "Corporales",
    "Mascarillas",
    "Tratamientos",
    "Reparación y blindaje"
];

// FORMATO DE PRECIOS
function formatoPrecio(precio) {
    return precio.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0
    });
}

// CREAR FILTROS
function crearFiltros() {
    const contenedor = document.getElementById("filtrosCategorias");

    if (!contenedor) return;

    contenedor.innerHTML = "";

    categorias.forEach(categoria => {
        const boton = document.createElement("button");

        boton.textContent = categoria;
        boton.classList.add("filtro-categoria");

        if (categoria === categoriaActual) {
            boton.classList.add("activo");
        }

        boton.addEventListener("click", () => {
            categoriaActual = categoria;
            crearFiltros();
            mostrarProductos();
        });

        contenedor.appendChild(boton);
    });
}

// MOSTRAR PRODUCTOS
function mostrarProductos() {
    const contenedor = document.getElementById("contenedorProductos");
    const buscador = document.getElementById("buscador");
    const textoBusqueda = buscador ? buscador.value.toLowerCase().trim() : "";

    if (!contenedor) return;

    const productosFiltrados = productos.filter(producto => {
        const coincideCategoria =
            categoriaActual === "Todos" ||
            producto.categoria === categoriaActual;

        const coincideBusqueda =
            producto.nombre.toLowerCase().includes(textoBusqueda) ||
            producto.descripcion.toLowerCase().includes(textoBusqueda);

        return coincideCategoria && coincideBusqueda;
    });

    contenedor.innerHTML = "";

    if (productosFiltrados.length === 0) {
        contenedor.innerHTML = `
            <p class="carrito-vacio">
                No encontramos productos con esa búsqueda.
            </p>
        `;
    }

    productosFiltrados.forEach(producto => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("producto");

        tarjeta.innerHTML = `
            <img src="${producto.imagen}"
                 alt="${producto.nombre}"
                 class="imagen-producto">

            <p class="categoria-producto">${producto.categoria}</p>

            <h3>${producto.nombre}</h3>

            <p class="descripcion-producto">
                ${producto.descripcion}
            </p>

            <div class="precio">
                ${formatoPrecio(producto.precio)}
            </div>

            ${
                producto.precioAnterior
                    ? `<p class="precio-anterior">${formatoPrecio(producto.precioAnterior)}</p>`
                    : ""
            }

            <button class="btn-agregar"
                    onclick="agregarAlCarrito(${producto.id})">
                Agregar al carrito
            </button>
        `;

        contenedor.appendChild(tarjeta);
    });

    const cantidad = document.getElementById("cantidadProductos");
    const textoMostrando = document.getElementById("textoMostrando");
    const titulo = document.getElementById("tituloCategoria");

    if (cantidad) {
        cantidad.textContent = `${productosFiltrados.length} artículos`;
    }

    if (textoMostrando) {
        textoMostrando.textContent =
            `Mostrando ${productosFiltrados.length} productos`;
    }

    if (titulo) {
        titulo.textContent =
            categoriaActual === "Todos"
                ? "Todos los productos"
                : categoriaActual;
    }
}

// AGREGAR AL CARRITO
function agregarAlCarrito(id) {
    const producto = productos.find(producto => producto.id === id);

    if (!producto) return;

    const productoEnCarrito = carrito.find(item => item.id === id);

    if (productoEnCarrito) {
        if (productoEnCarrito.cantidad >= 10) {
            alert("Solo puedes agregar máximo 10 unidades de este producto.");
            return;
        }

        productoEnCarrito.cantidad++;
    } else {
        carrito.push({
            ...producto,
            cantidad: 1
        });
    }

    mostrarCarrito();
}

// MOSTRAR CARRITO
function mostrarCarrito() {
    const contenedor = document.getElementById("productosCarrito");

    if (!contenedor) return;

    contenedor.innerHTML = "";

    if (carrito.length === 0) {
        contenedor.innerHTML = `
            <p class="carrito-vacio">
                Tu carrito está vacío.
            </p>
        `;
    }

    carrito.forEach(producto => {
        const item = document.createElement("div");
        item.classList.add("item-carrito");

        item.innerHTML = `
            <img src="${producto.imagen}"
                 alt="${producto.nombre}"
                 class="imagen-carrito">

            <div class="detalle-carrito">
                <h3>${producto.nombre}</h3>

                <p>${formatoPrecio(producto.precio)}</p>

                <div class="controles-cantidad">
                    <button onclick="cambiarCantidad(${producto.id}, -1)">-</button>

                    <span>${producto.cantidad}</span>

                    <button onclick="cambiarCantidad(${producto.id}, 1)">+</button>
                </div>

                <button class="btn-eliminar"
                        onclick="eliminarDelCarrito(${producto.id})">
                    Eliminar
                </button>
            </div>
        `;

        contenedor.appendChild(item);
    });

    actualizarResumen();
}

// CAMBIAR CANTIDAD
function cambiarCantidad(id, cambio) {
    const producto = carrito.find(item => item.id === id);

    if (!producto) return;

    const nuevaCantidad = producto.cantidad + cambio;

    if (nuevaCantidad > 10) {
        alert("Solo puedes agregar máximo 10 unidades de este producto.");
        return;
    }

    if (nuevaCantidad <= 0) {
        eliminarDelCarrito(id);
        return;
    }

    producto.cantidad = nuevaCantidad;

    mostrarCarrito();
}

// ELIMINAR PRODUCTO
function eliminarDelCarrito(id) {
    carrito = carrito.filter(producto => producto.id !== id);
    mostrarCarrito();
}

// ACTUALIZAR RESUMEN
function actualizarResumen() {
    const cantidadTotal = carrito.reduce(
        (total, producto) => total + producto.cantidad,
        0
    );

    const subtotal = carrito.reduce(
        (total, producto) =>
            total + producto.precio * producto.cantidad,
        0
    );

    const descuento = subtotal >= 300000 ? subtotal * 0.10 : 0;
    const total = subtotal - descuento;

    const contador = document.getElementById("contadorCarrito");
    const totalArticulos = document.getElementById("totalArticulos");
    const subtotalElemento = document.getElementById("subtotal");
    const descuentoElemento = document.getElementById("descuento");
    const totalElemento = document.getElementById("total");

    if (contador) contador.textContent = cantidadTotal;
    if (totalArticulos) totalArticulos.textContent = cantidadTotal;

    if (subtotalElemento) {
        subtotalElemento.textContent = formatoPrecio(subtotal);
    }

    if (descuentoElemento) {
        descuentoElemento.textContent =
            descuento > 0
                ? `-${formatoPrecio(descuento)}`
                : formatoPrecio(0);
    }

    if (totalElemento) {
        totalElemento.textContent = formatoPrecio(total);
    }
}

// ABRIR CARRITO
function abrirCarrito() {
    document.getElementById("carrito")?.classList.add("activo");
    document.getElementById("fondoCarrito")?.classList.add("activo");
}

// CERRAR CARRITO
function cerrarCarrito() {
    document.getElementById("carrito")?.classList.remove("activo");
    document.getElementById("fondoCarrito")?.classList.remove("activo");
}

// VACIAR CARRITO
function vaciarCarrito() {
    if (carrito.length === 0) {
        alert("Tu carrito ya está vacío.");
        return;
    }

    if (confirm("¿Estás segura de que deseas vaciar el carrito?")) {
        carrito = [];
        mostrarCarrito();
    }
}

// FINALIZAR COMPRA
function finalizarCompra() {
    if (carrito.length === 0) {
        alert("Agrega productos al carrito antes de finalizar la compra.");
        return;
    }

    const subtotal = carrito.reduce(
        (total, producto) =>
            total + producto.precio * producto.cantidad,
        0
    );

    const descuento = subtotal >= 300000 ? subtotal * 0.10 : 0;
    const total = subtotal - descuento;

    alert(
        "¡Gracias por comprar en Click Hair!\n\n" +
        "Total de tu compra: " + formatoPrecio(total)
    );

    carrito = [];
    mostrarCarrito();
    cerrarCarrito();
}

// EVENTOS
document.addEventListener("DOMContentLoaded", () => {
    crearFiltros();
    mostrarProductos();
    mostrarCarrito();

    const botonCarrito = document.getElementById("btnCarrito");
    const botonCerrar = document.getElementById("cerrarCarrito");
    const fondo = document.getElementById("fondoCarrito");
    const botonVaciar = document.getElementById("btnVaciar");
    const botonFinalizar = document.getElementById("btnFinalizar");
    const buscador = document.getElementById("buscador");
    const botonBuscar = document.getElementById("btnBuscar");
    const botonInicio = document.getElementById("btnInicio");
    const botonTodos = document.getElementById("btnTodos");

    if (botonCarrito) {
        botonCarrito.addEventListener("click", abrirCarrito);
    }

    if (botonCerrar) {
        botonCerrar.addEventListener("click", cerrarCarrito);
    }

    if (fondo) {
        fondo.addEventListener("click", cerrarCarrito);
    }

    if (botonVaciar) {
        botonVaciar.addEventListener("click", vaciarCarrito);
    }

    if (botonFinalizar) {
        botonFinalizar.addEventListener("click", finalizarCompra);
    }

    if (buscador) {
        buscador.addEventListener("input", mostrarProductos);
    }

    if (botonBuscar) {
        botonBuscar.addEventListener("click", mostrarProductos);
    }

    function mostrarTodosLosProductos() {
        categoriaActual = "Todos";

        if (buscador) {
            buscador.value = "";
        }

        crearFiltros();
        mostrarProductos();

        document.getElementById("contenedorProductos")?.scrollIntoView({
            behavior: "smooth"
        });
    }

    if (botonInicio) {
        botonInicio.addEventListener("click", mostrarTodosLosProductos);
    }

    if (botonTodos) {
        botonTodos.addEventListener("click", mostrarTodosLosProductos);
    }

    document.addEventListener("keydown", evento => {
        if (evento.key === "Escape") {
            cerrarCarrito();
        }
    });
});