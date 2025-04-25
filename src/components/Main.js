import React, { useReducer, useEffect, useState } from "react";
import BookingForm from "./BookingForm";
import BookingSlot from "./BookingSlot";
import { initializeTimes, updateTimes, submitBooking } from "../utils/Api";
import { useNavigate } from "react-router-dom";

function timesReducer(state, action) {
  switch (action.type) {
    case "init":
    case "update":
      return action.payload;
    default:
      return state;
  }
}

function Main() {
  const [availableTimes, dispatch] = useReducer(timesReducer, []);
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadTimes() {
      const times = await initializeTimes();
      dispatch({ type: "init", payload: times });
    }
    loadTimes();
  }, []);

  const submitForm = async (formData) => {
    const result = await submitBooking(formData);
    if (result.success !== false) {
      setBookings((prev) => [...prev, formData]); // ✅ aggiungi nuova prenotazione
      navigate("/booking-confirmed");
    } else {
      alert("Errore durante la prenotazione.");
    }
  };

  return (
    <>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />

      <h3>Orari disponibili</h3>
      <div className="slot-list">
        {Array.isArray(availableTimes) && availableTimes.map((time, index) => (
          <BookingSlot key={index} time={time} isAvailable={true} />
        ))}
      </div>

      {bookings.length > 0 && (
        <div className="booking-summary">
          <h3>Prenotazioni recenti</h3>
          <ul>
            {bookings.map((b, i) => (
              <li key={i}>
                📅 {b.date} - ⏰ {b.time} - 👥 {b.guests} ospiti ({b.occasion})
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Main;



