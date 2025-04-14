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
console.log(findLongestWord(text));