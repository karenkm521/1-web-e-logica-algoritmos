function findMax(arr) {
    // TODO: Agregar la condición del caso base
    if (arr.length === 1) {
        return arr[0];
    }
    //Segundo caso base para evitar divir el arreglo en solo un elemnto
    if (arr.length===2) {
        const a= arr[0]
        const b=arr[1]
        return a > b ? a : b;
    }

    // TODO: Dividir el arreglo en dos mitades
    const medio = Math.floor(arr.length/2)
    const izq = arr.slice(0, medio)
    const der = arr.slice(medio)

    // TODO: Llamar recursivamente a la función para ambas mitades
    const leftMax = findMax(der);
    const rightMax = findMax(izq);

    // TODO: Combinar las soluciones comparando los máximos
    return leftMax > rightMax ? leftMax : rightMax;
}
// Ejemplo de entrada
const numbers = [3, 8, 2, 10, 5, 7];
console.log(findMax(numbers)); // Salida esperada: 10

