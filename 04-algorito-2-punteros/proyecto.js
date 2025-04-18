const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

function encontrarPareja(arr) {
    let izq = 0;
    let der = 1;

    while (izq < arr.length - 1) {
        const nombre1 = arr[izq];
        const nombre2 = arr[der];

        // Comparamos iniciales
        if (nombre1[0] === nombre2[0]) {
            return [nombre1, nombre2];
        }

        der++;
        izq++;
    }

    return false; // Si no se encuentra ninguna pareja
}

console.log(encontrarPareja(invitados));

// Resultado: ["Carlos", "Cecilia"]