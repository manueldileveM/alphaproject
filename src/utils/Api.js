export async function fetchData(date) {
    // Dati statici simulati per test
    return ["17:00", "18:00", "19:00", "20:00"];
  }

  // Inizializza gli orari alla prima apertura
  export async function initializeTimes() {
    const today = new Date().toISOString().split("T")[0];
    return await fetchData(today);
  }

  // Aggiorna gli orari in base alla data selezionata
  export async function updateTimes(date) {
    return await fetchData(date);
  }

  // Simula l'invio della prenotazione — conferma sempre con success: true
  export async function submitBooking(data) {
    console.log("🔁 Prenotazione inviata:", data);
    return { success: true }; // forza conferma per test
  }
