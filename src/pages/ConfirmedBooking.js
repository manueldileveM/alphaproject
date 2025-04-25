import React from "react";
import { Link } from "react-router-dom";

function ConfirmedBooking() {
  return (
    <section className="confirmation-page">
      <h2>Prenotazione confermata! 🎉</h2>
      <p>Grazie per aver prenotato con Little Lemon. Riceverai una conferma via email.</p>
      <Link to="/" className="button">Torna alla Home</Link>
    </section>
  );
}

export default ConfirmedBooking;
