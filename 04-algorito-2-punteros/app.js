//Algoritmo de los 2 punteros

//1. Encontrar la suma de un valor objetivo dentro de un array ordenado
function encontrarPar(arr, objetivo){

    let izquierda = 0
    let derecha = arr.length-1

    while(izquierda < derecha){
        let suma = arr[izquierda] + arr[derecha]
        if(suma == objetivo){
            return [ arr[izquierda], arr[derecha] ]
        }else if(suma < objetivo){
            izquierda++
        }else{
            derecha--
        }
    }

    return false
}

/* let arr = [15,7,11,2] 
let obj = 9

let result = encontrarPar(arr, obj)
console.log(result) */

//2. Detectar si una palabra es palíndormo

function esPalindromo(arr) {
    
    let izq = 0
    let der = arr.length-1

    while(izq < der){
        if(arr[izq] !== arr[der]){
            return false
        }
        izq++
        der--
    }

    return true

}


/* console.log( esPalindromo([1,2,3,4,3,2,1]) ) 
console.log( esPalindromo("computador") ) 
console.log( esPalindromo("aibofobia") )  */

//3. Encontrar usuarios duplicados en un array basado en el id del usuario

const listaUsuarios = [
    {id:1,nombre: "ana"},
    {id:2,nombre: "calros"},
    {id:2,nombre: "carmen"},
    {id:3,nombre: "daniel"},
    {id:4,nombre: "elena"},
    {id:4,nombre: "eduardo"},
    {id:5,nombre: "fernando"},
]



/* function encontrarDuplicados(usuarios){

    let izq = 0
    let der = 1
    let duplicados = []

    while(der < usuarios.length){
        if(usuarios[izq].id === usuarios[der].id){
            duplicados.push(usuarios[izq].id)
        }
        izq++
        der++
    }

} */


const encontrarParParaCena = (usuarios) => {
    let punteroIzq = 0
    let punteroDer = 1
    let duplicados = []
    while (punteroDer < usuarios.length) {
        if(usuarios[punteroIzq].id === usuarios[punteroDer].id){
            duplicados.push(usuarios[punteroIzq].nombre)
            duplicados.push(usuarios[punteroDer].nombre)
        }
            punteroDer++
            punteroIzq++
    }
    return duplicados.length > 0 ? duplicados : false; // Si no se encuentra ningún par
}

console.log( encontrarParParaCena(listaUsuarios) ) 