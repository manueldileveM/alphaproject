// Funzione iniziale: restituisce gli orari disponibili
export const initializeTimes = () => {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  };

  // Funzione reducer per aggiornare gli orari
  export const updateTimes = (state, action) => {
    if (action.type === "update") {
      // In futuro: logica in base a action.date
      return [...state];
    }
    return state;
  };
