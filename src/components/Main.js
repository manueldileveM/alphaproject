import React, { useReducer } from "react";
import BookingPage from "./BookingPage";

// In futuro: logica condizionata sulla data
const updateTimes = (state, action) => {
  if (action.type === "update") {
    const selectedDate = action.date;
    // Qui potrai usare una funzione per ottenere slot da un'API o da una logica
    return [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00"
    ]; // Per ora restituisce lo stesso array
  }
  return state;
};

const initializeTimes = () => {
  return [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ];
};

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <main>
      <BookingPage
        availableTimes={availableTimes}
        dispatch={dispatch}
      />
    </main>
  );
}

export default Main;

