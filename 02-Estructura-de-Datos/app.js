//Crea un arreglo vacío llamado listaDeCompras.
let listaDeCompras=[]
let newProducto=""

//Implementa una función agregarProducto(producto) que agregue un nuevo producto al final de la lista.
const agregarProducto = ()=>{
    const input=document.getElementById("producto");
    let newProducto=input.value
    if (listaDeCompras.includes(newProducto)) {
        alert(`${newProducto} ya está en la lista.`);
    } else {
        listaDeCompras.push(newProducto);
        alert(`${newProducto} Agregado en la lista.`);
    }
    input.value = ""; 
}

//Implementa una función eliminarProducto(producto) que elimine un producto de la lista.
const eliminarProducto = (producto) => {
    listaDeCompras = listaDeCompras.filter(item => item !== producto);
};
//Implementa una función mostrarLista() que imprima todos los productos de la lista.
const boxLista =document.getElementsByClassName("lista")[0];
const mostrarLista = () => {
    boxLista.innerHTML="";
    listaDeCompras.forEach( item => {
        boxLista.innerHTML+=`<h4>${item}</h4>`;


    } )
}
//Asegúrate de que no haya productos duplicados en la lista.




