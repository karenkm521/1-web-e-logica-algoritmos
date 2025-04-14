//Encontrar numero par
// num% 2== 0

function encontrarPar(num){
     //Caso base
     if (num===0){
        return "par"
     } else if( num===1){
        return"impar"
     } else{
        //llamada recursiva
        return encontrarPar(num-2)
     }
}
console.log( encontrarPar(23))
encontrarPar(30)
encontrarPar(45)