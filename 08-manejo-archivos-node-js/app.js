//Móudlo fs (file system / sistema de archivos)
/* 
- leer
- modificar
- copiar
- eliminar
- renombrar
*/

//Ej.  fs.rename()   ->  fs.renameSync()

//Modo asíncrono

//Importando el módulo fs
const fs = require("fs")

// 📝 Para leer archivos
//1. ruta del archivo a leer
//2. set de caracteres
//3. función que se ejecuta después de resolver el llamado 
fs.readFile("index.html", "utf-8", (err, contenido) => {
    if(err){
        throw err
    }else{
        console.log(contenido)
    }
})
console.log("después del readFile")

// 📝 Para renombrar archivos
//1. ubicación del archivo a renombrar
//2. Nuevo nombre del archivo
//3. función para capturar el error
fs.rename("index.html","vista.html", err => {
    if(err){
        throw err
    }
})
console.log("después del rename")

// 📝 Agregar información al final del archivo
//1. ubicación
//2. contenido a añadir
//3. función que captura el error
fs.appendFile("vista.html","<h1>NODEJS</h1>", err => {
    if(err){
        throw err
    }

    console.log("El contenido se añadió")
})
console.log("después del appendFile")

// 📝 Reemplazar todo el contenido del archivo

fs.writeFile("vista.html","El velóz murciélago hindú", err => {
    if(err){
        throw err
    }

    console.log("El contenido se reemplazó")
}) 
console.log("después del writeFile")

// 📝 Eliminar un archivo
fs.unlink("vista.html", err => {
    if(err){
        throw err
    }

    console.log("Archivo eliminado")
})
console.log("después del unlink")