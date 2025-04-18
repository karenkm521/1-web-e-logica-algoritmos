/* 
Divide el texto en palabras individuales utilizando el método .split(' ') en la cadena.
Desliza una ventana que recorra cada palabra del arreglo y compara su longitud con la palabra más larga encontrada hasta ese momento.
Devuelve la palabra más larga al final del proceso.
*/
/*SOLUCION COMPAÑERO
function findLongestWord(text) {
    const words = text.split(" ")
    let longestWord = ''; 
    let aux ="";
    for (let i = 0 ; i < words.length; i++){
        aux = words[i]
        if(aux.length > longestWord.length){
            longestWord = aux;
        }
    }
    return longestWord;
}
const text = "JavaScript es un lenguaje de programación increíble para aprender.";
console.log(findLongestWord(text));*/

function findLongestWord(text) {
    // TODO: Dividir el texto en palabras y almacenarlas en una variable
    const words = text.split(" ");

    let longestWord = '';// Inicializar la palabra más larga

    // Recorrer el arreglo de palabras con un ciclo
    for (let word of words) {
        // Comparar la longitud de la palabra actual con la más larga
        if (word.length > longestWord.length) {
            // Actualizar la palabra más larga
            longestWord = word;
        }
    }

    // Retornar la palabra más larga encontrada
    return longestWord;
}

// Ejemplo de uso
const text = "JavaScript es un lenguaje de programación increíble para aprender.";
// TODO: Llama a la función y muestra el resultado
console.log(findLongestWord(text)); // Resultado esperado: "programación"
