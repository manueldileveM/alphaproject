import React from "react";
import Main from "../components/Main";

function BookingPage() {
  return (
    <section className="booking-page">
      <h2>Prenota un tavolo</h2>
      <p>Compila il modulo qui sotto per riservare il tuo tavolo al Little Lemon!</p>

      <Main />

      <p>Riceverai una conferma via email entro pochi minuti.</p>
    </section>
  );
}

export default BookingPage;
