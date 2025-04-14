const fs = require("fs")
//Importa el módulo fs (file system), que permite leer y escribir archivos en Node.js.

const filePath = 'listaNotas.json';
//Define la ruta del archivo donde se guardarán las notas.

const crearNota = (titulo, contenido) => {
    let notas = []
    if( fs.existsSync(filePath) ){
        const data = fs.readFileSync(filePath,'utf-8')
        notas = JSON.parse(data)
    }
    //Comprobación para que NO se agregue tarea con el mismo título
    const nuevaNota = {titulo, contenido}
 
    const yaExiste = notas.some(nota => nota.titulo === titulo);

    if(yaExiste){
        console.log(`Ya existe una nota con ese título: ${titulo}`)
    }
    else{
        notas.push(nuevaNota)
        fs.writeFileSync(filePath, JSON.stringify(notas))
        console.log("La nota se agregó correctaente")
        }
    }
    
    
//Listar notas: Lee el archivo `notas.json` y muestra todas las notas en la consola.

const listarNotas = () => {
    if(fs.existsSync(filePath) ){
        const data = fs.readFileSync(filePath, 'utf-8');
        const notas = JSON.parse(data);
        console.log("📄Tus notas📄:")
        //Se imprime cada elemento
        notas.forEach((element , index )=> {
            console.log(`${index}. Título: ${element.titulo}`)
            console.log(`Nota: ${element.contenido}`)
        });
    } else{
        console.log("Aún no tienes ninguna nota guardada.");
    }

}
//Eliminar una nota: Borra una nota específica según su título.

const eliminarNota = (titulo) => {
    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf-8');
        let notas = JSON.parse(data);
        // Se crea un nuevo arreglo dejando a fuera (Filtrando) las notas que coincidan con el titulo
        const notasFiltradas = notas.filter(nota => 
            !nota.titulo.toLowerCase().includes(titulo.toLowerCase())
        );
        // Se compara la cantidad de elementos del  arreglo filtrado con el original 

        if (notas.length === notasFiltradas.length) {
            console.log(`No se existe la nota con el título "${titulo}".`);
            return;
        }
        // Se remplaza el arreglo 
        fs.writeFileSync(filePath, JSON.stringify(notasFiltradas, null, 2));
        console.log(`Se elimino la nota con el  título "${titulo}".`);
    } else {
        console.log("Aún no tienes ninguna nota guardada.");
    }
}


crearNota("Académico","Estudiar Node.js")
crearNota("Entrenamiento","Estudiar Backtracking")
crearNota("Proyecto","Realizar mi tienda online")
listarNotas()
eliminarNota("proyecto")
listarNotas()