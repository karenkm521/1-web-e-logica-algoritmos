import {registrarDestino,mostrarItinerario} from "./viajes.js";
// Iniciar la aplicación
function iniciarApp() {
    // Ejemplo de cómo registrar destinos
    registrarDestino("Paris", "2024-06-15", "Avión","2","3");
    registrarDestino("Londres", "2024-07-01", "Tren","3","1");
    //Registrar Nuevos destinos
    registrarDestino("Tokio","2025-06-26","Avión","4","2");
    registrarDestino("Buenos Aires", "2026-01-12", "Avión","3","2")
    registrarDestino("Chihuahua","2025-02-03", "Tren","3","8")
    registrarDestino("Miami", "2025-09-08","Crucero","5","7")
    registrarDestino("CDMX", "2025-05-08","Camión","2","14")
    // Mostrar el itinerario de los viajes
    mostrarItinerario();
}

// Ejecutar la aplicación
iniciarApp();