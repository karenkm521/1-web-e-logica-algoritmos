// Suma de números en un array
/*function sumaDiv( array){
    //Caso base
    if(array.length ===1){
        return array[0]
    }
    //Dividir
    const medio= Math.floor(array.length/2)
    const izq= array.slice(0,medio)
    const der= array.slice(medio)
    //Conquistar
    const sumaIzq= sumaDiv(izq)
    const sumaDer= sumaDiv (der)
    //Combinar
    return sumaDer+ sumaIzq
}
console.log(sumaDiv([1,2,4,6,8,9]))
*/

// Búsqueda Binaria 
function busquedaBinaria(arr, target, inicio=0, fin =arr.length-1){
    //Caso Base
    if (inicio>fin){
        return -1
    }
    // Calcular el indice medio 
    const medio= Math.floor((inicio+fin)/2)
}