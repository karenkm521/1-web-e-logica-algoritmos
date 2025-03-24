// Array para guardar los destinos
let destinos = [];

// Función para registrar un destino de viaje
export const registrarDestino=(destino,fecha,transporte,personas, dias) =>  {
    // TODO: Crear un objeto con los datos del destino
    const nuevoViaje = {
        destino: destino,
        fecha: fecha,
        transporte: transporte,
        personas: personas,
        dias:dias,
        costo: calcularCosto(destino, transporte,personas,dias)
    };

    destinos.push(nuevoViaje);
}

// Función para calcular el costo del viaje
const calcularCosto=(destino, transporte,personas,dias )=> {
    const costosLugares={
        "Paris":1000,
        "Londres": 900,
        "New York": 700, 
        "Tokio":1200,
        "Buenos Aires":650,
        "Chihuahua": 250,
        "Miami":500
    }
    const costoTrasporte={
        "Avión":900,
        "Tren":300,
        "Crucero":700,
        "Camión":100
    }

    let costoEstancia = (costosLugares[destino] || 0) * dias;
    let costoViaje = costoTrasporte[transporte] || 0;
    let costoTotal = (costoEstancia + costoViaje) * personas;

    return costoTotal;
}

// Función para mostrar el itinerario de los viajes registrados
export function mostrarItinerario() {
    destinos.forEach(viaje => {
        console.log(`Destino: ${viaje.destino}`);
        console.log(`Fecha: ${viaje.fecha}`);
        console.log(`Transporte: ${viaje.transporte}`);
        console.log(`Número de Personas: ${viaje.personas}`);
        console.log(`Número de días: ${viaje.dias}`);
        console.log(`Costo: $${viaje.costo}`);
        console.log("---------------------------");
    });
}
