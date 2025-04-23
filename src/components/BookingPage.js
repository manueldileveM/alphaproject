import React from "react";
import BookingForm from "../components/BookingForm";
import BookingSlot from "../components/BookingSlot";

function BookingPage({ availableTimes, dispatch }) {
  return (
    <section className="booking-page">
      <h2>Prenota un tavolo</h2>
      <p>Compila il modulo qui sotto per riservare il tuo tavolo al Little Lemon!</p>

      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
      />

      <h3>Orari disponibili</h3>
      <div className="slot-list">
        {availableTimes.map((time, index) => (
          <BookingSlot key={index} time={time} isAvailable={true} />
        ))}
      </div>

      <p>Riceverai una conferma via email entro pochi minuti.</p>
    </section>
  );
}

export default BookingPage;
