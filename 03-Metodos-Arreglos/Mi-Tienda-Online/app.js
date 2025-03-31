//Arreglo Productos
const listProductos = [
    // Pasteles
    { codigo: "P001", nombre: "Pastel de Chocolate", categoria: "pasteles", precio: 500, stock: 10, descripcion: "Esponjoso pastel de chocolate con betún de ganache." },
    { codigo: "P002", nombre: "Pastel de Tres Leches", categoria: "pasteles", precio: 450, stock: 8, descripcion: "Pastel húmedo con mezcla de tres leches y crema batida." },
    { codigo: "P003", nombre: "Pastel Red Velvet", categoria: "pasteles", precio: 520, stock: 6, descripcion: "Pastel rojo aterciopelado con betún de queso crema." },
    { codigo: "P004", nombre: "Pastel de Zanahoria", categoria: "pasteles", precio: 480, stock: 7, descripcion: "Pastel con zanahoria rallada, nueces y especias." },
    { codigo: "P005", nombre: "Pastel Mosaico", categoria: "pasteles", precio: 550, stock: 5, descripcion: "Colorido pastel con gelatinas incrustadas y crema." },
    // Cupcakes
    { codigo: "C001", nombre: "Cupcake de Vainilla", categoria: "cupcakes", precio: 50, stock: 15, descripcion: "Suave cupcake de vainilla con betún de mantequilla." },
    { codigo: "C002", nombre: "Cupcake de Chocolate", categoria: "cupcakes", precio: 55, stock: 12, descripcion: "Cupcake de chocolate con crema de avellana." },
    { codigo: "C003", nombre: "Cupcake Red Velvet", categoria: "cupcakes", precio: 60, stock: 10, descripcion: "Mini Red Velvet con topping de queso crema." },
    { codigo: "C004", nombre: "Cupcake de Zanahoria", categoria: "cupcakes", precio: 65, stock: 9, descripcion: "Cupcake especiado con zanahoria y nueces." },
    { codigo: "C005", nombre: "Cupcake de Fresa", categoria: "cupcakes", precio: 65, stock: 11, descripcion: "Cupcake de fresa natural con crema batida." },
    // Panes
    { codigo: "PA001", nombre: "Concha Vainilla", categoria: "panes", precio: 35, stock: 20, descripcion: "Pan dulce tradicional con costra de vainilla." },
    { codigo: "PA002", nombre: "Concha Chocolate", categoria: "panes", precio: 35, stock: 8, descripcion: "Concha esponjosa con cobertura de chocolate." },
    { codigo: "PA003", nombre: "Cuerno", categoria: "panes", precio: 20, stock: 15, descripcion: "Pan en forma de cuerno con ligero sabor a mantequilla." },
    { codigo: "PA004", nombre: "Oreja", categoria: "panes", precio: 25, stock: 18, descripcion: "Crujiente pan de hojaldre en forma de oreja." },
    { codigo: "PA005", nombre: "Dona Glaseada", categoria: "panes", precio: 30, stock: 14, descripcion: "Dona esponjosa con glaseado de vainilla." },
    // Gelatinas
    { codigo: "G001", nombre: "Gelatina de Fresa", categoria: "gelatinas", precio: 120, stock: 10, descripcion: "Gelatina de fresa con trozos de fruta natural." },
    { codigo: "G002", nombre: "Gelatina de Mosaico", categoria: "gelatinas", precio: 150, stock: 9, descripcion: "Gelatina de colores con base de leche condensada." },
    { codigo: "G003", nombre: "Gelatina de Arroz", categoria: "gelatinas", precio: 130, stock: 12, descripcion: "Gelatina cremosa de leche con un toque de vainilla." },
    { codigo: "G004", nombre: "Gelatina de Mango", categoria: "gelatinas", precio: 140, stock: 11, descripcion: "Refrescante gelatina de mango con pulpa natural." },
    { codigo: "G005", nombre: "Gelatina de Uva", categoria: "gelatinas", precio: 125, stock: 13, descripcion: "Gelatina de uva con un intenso sabor afrutado." }
];
// DOM
const contenedorProductos = document.getElementById("product-container");

// Función para mostrar productos en el contenedor
const mostrarProductos = productos => {
    contenedorProductos.innerHTML = ""; // Limpia el contenedor antes de agregar nuevos productos

    productos.forEach(element => {
        contenedorProductos.innerHTML += `
        <div class="product-card">
            <img src="imagenes/${element.nombre}.jpg" alt="Producto">
            <p class="product-code">Código: ${element.codigo}</p>
            <h2 class="product-name">${element.nombre}</h2>
            <p class="product-price">$ ${element.precio}</p>
            <p class="product-description">${element.descripcion}</p>
            <button class="add-to-cart">Agregar al Carrito</button>
        </div>`;
    });
};

// Mostrar todos los productos al inicio
mostrarProductos(listProductos);

// Filtro de categoría
// Funcion para extraer el value del filtro y activar la funcion del criterio
document.getElementById("categoria").addEventListener("change", () => {
    const categoria = document.getElementById("categoria").value;
    filtrarProductosPorCategoria(categoria);
});
//Funcion criterio
const filtrarProductosPorCategoria = (categoria) => {
    const productosFiltrados = categoria === "todos" 
        ? listProductos  // El operador ternario (? :) en JavaScript es una forma abreviada de escribir una condición if-else.
        : listProductos.filter(producto => producto.categoria === categoria);
    
    console.log("Categoría seleccionada:", categoria);
    console.log("Productos filtrados:", productosFiltrados);

    mostrarProductos(productosFiltrados); // Actualiza la vista con los productos filtrados
};

// Filtro de precio
// Funcion para extraer el value del filtro y activar la funcion del criterio
document.getElementById("precio").addEventListener("change", () => {
    const precio = document.getElementById("precio").value;
    filtrarProductosPorPrecio(precio);
});
//Funcion criterio
const filtrarProductosPorPrecio = (precio) => {
    let productosFiltrados;

    if (precio === "todos") {
        productosFiltrados = listProductos;
    } else if (precio === "0-100") {
        productosFiltrados = listProductos.filter(producto => producto.precio >= 0 && producto.precio <= 100);
    } else if (precio === "101-300") {
        productosFiltrados = listProductos.filter(producto => producto.precio >= 101 && producto.precio <= 300);
    } else if (precio === "301-500") {
        productosFiltrados = listProductos.filter(producto => producto.precio >= 301 && producto.precio <= 500);
    } else {
        productosFiltrados = listProductos.filter(producto => producto.precio > 500);
    }
    mostrarProductos(productosFiltrados);
};

// Filtro Alfabetico
// Funcion para extraer el value del filtro y activar la funcion del criterio
document.getElementById("ordenar").addEventListener("change", () => {
    const criterio = document.getElementById("ordenar").value;
    console.log(criterio)
    ordenarProductos(criterio);
});
//Funcion criterio
const ordenarProductos = (criterio) => {
    let productosOrdenados = [...listProductos]; // Copia del array original liistproducts

    switch (criterio) {
        case "a-z":
            productosOrdenados.sort((a, b) => a.nombre.localeCompare(b.nombre)); 
            break;
        case "z-a":
            productosOrdenados.sort((a, b) => b.nombre.localeCompare(a.nombre)); 
            break;
        default:
            productosOrdenados = [...listProductos]; 
            break;
    }

    mostrarProductos(productosOrdenados); 
};

// Arreglo de nombrea
const nombresProductos = listProductos.map(producto => producto.nombre);
console.log(nombresProductos);